// Create web server
// Create a web server that listens on port 3000 and serves the following responses:
// - /comments: returns a list of comments from the database
// - /comments/new: returns a form that allows users to add a new comment
// - /comments/:id: returns a single comment with the given id
// - /comments/:id/edit: returns a form that allows users to edit a comment with the given id
// - /comments/:id/delete: deletes a comment with the given id
// The data should be stored in memory (i.e., it will be lost when the server restarts).
// Comments have the following structure:
// {
//   id: 1,