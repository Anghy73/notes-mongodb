const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
  // res.render('form')
  res.send('note add')
}

notesCtrl.createNewNote = (req, res) => {
  res.send('new note')
}

notesCtrl.renderNotes = (req, res) => {
  res.send('notes')
}

notesCtrl.renderEditForm = (req, res) => {
  res.send('render edit form')
}

notesCtrl.updateNotes = (req, res) => {
  res.send('update notes')
}

notesCtrl.deleteNote = (req, res) => {
  res.send('delete note')
}

module.exports = notesCtrl