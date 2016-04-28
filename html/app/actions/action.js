/**
 * Created by Sahil on 05/12/15.
 */

var Reflux=require('reflux');

var NoteActions = Reflux.createActions([
    "createNote",
    "editNote",
    "toggleFooter",
    "fixNav",
]);

module.exports=NoteActions;
