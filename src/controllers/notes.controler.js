const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body
  const newNote = new Note({ title, description })
  await newNote.save()
  req.flash('success_msg', 'Note Added Successfully')
  res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find().lean()
  res.render('notes/all-notes', { notes })
}

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.render('notes/edit-note', note)
}

notesCtrl.updateNotes = async (req, res) => {
  const { title, description } = req.body
  console.log(req.body);
  await Note.findByIdAndUpdate(req.params.id, {title, description})
  req.flash('success_msg', 'Note Updated Successfully')
  res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash('success_msg', 'Note Deleted Successfully')
  res.redirect('/notes')
}

module.exports = notesCtrl