const notes = [
    {
        id: 1,
        subject: "objects",
        date: "May 3th",
        feeling: "good",
        timeSpent: "1 hour"
    },

    {
        id: 2,
        subject: "function",
        date: "May 4th",
        feeling: "I need to practice more",
        timeSpent: "2 hours"
    }
]

const noteAboutToday={
    id: 3,
    subject: "adding new objects with function",
    date: "May 5th",
    feeling: "I need to watch the video again",
    timeSpent: "1.5 hours"
    }
    notes.push(noteAboutToday)

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    note.id = idForNewNote

    const today = new Date()
    dateCreated = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    note.date = dateCreated
    notes.push(note)
    }   
    
const moreNewerNote={
    subject: "how to edit zsh theme",
    date: "May 6th",
    feeling: " need more work",
    timeSpent: "3 hours"
    }
    
createNote(moreNewerNote)
    
    console.log (notes)

    // for ( const note of notes){
    // console.log(`Note ${note.id}
    // I learn about ${note.subject}
    // I took this class on ${note.date}
    // I feel ${note.feeling}
    // `)
    // }

    // console.log(notes)

    // const searchTerm = "May 5th"
    // for (const note of notes){
    //     if (note.date===searchTerm){
    //         console.log(note)
    //     }
    // }

