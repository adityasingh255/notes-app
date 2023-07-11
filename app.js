const chalk = require('chalk')
const yargs= require ('yargs')
const notes = require ('./notes.js')


yargs.version('1.1.0')
// create add command
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'note body',
            demandOption:'true',
            type:'string'

        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})

// create a remove command

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
             describe:'note title',
             demandOption:true,
             type:'string'

        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command:'List',
    describe:'List ur notes',
    handler (){
        notes.listNotes()
    }
})

// create read command 

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:'true',
            type:'string'
        }
    },
     handler (argv){
          notes.readNote(argv.title)
    }
})
// add, remove, read, list
yargs.parse()
//console.log(yargs.argv)













