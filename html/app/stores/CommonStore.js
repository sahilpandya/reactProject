/**
 * Created by Sahil on 05/12/15.
 */
var Reflux=require('reflux');
var NoteActions=require('../actions/action');

var _notes=[];

var CommonStore = Reflux.createStore({
    //listenables: [NoteActions],
    init: function() {
        this.listenTo(NoteActions.createNote, this.onCreate);
        this.listenTo(NoteActions.editNote, this.onEdit);
        this.listenTo(NoteActions.toggleFooter, this.onToggleFooter);
        this.listenTo(NoteActions.fixNav, this.secondaryFixedNav);
    },

    onCreate: function(note) {
        _notes.push(note);
        this.trigger(_notes);
    },

    onEdit: function(note) {
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===note._id){
                _notes[i].text=note.text;
                this.trigger(_notes);
                break;
            }
        }
    },

    getNotes:function(){
        return _notes;
    },

    getNote:function(id){
        for(var i=0;i<_notes.length;i++){
            if(_notes[i]._id===id){
                return _notes[i];
            }
        }
    },

    onToggleFooter: function(pass){
        $("#demo").slideToggle();
        $('html, body').animate({
             scrollTop:$(document).height()
        }, 'slow');
        console.log(pass);
    },
    
    secondaryFixedNav: function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $(".tabs").addClass('tabsS');
        }
        else {
             $(".tabs").removeClass('tabsS');
        }
    }


});

module.exports=CommonStore;
