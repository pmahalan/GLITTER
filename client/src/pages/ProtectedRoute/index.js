import React, { useEffect, useState } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { TextArea, FormBtn } from "../../components/Form";
// import ReactMusicPlayer from "../ReactMusicPlayer";

let songs = [
  {
      url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
      artist: {
          name: 'Redfoo',
          song: 'New Thang'
      }
      //Works some of the time
  },
  {
    url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
    artist: {
        name: 'Daft Punk',
        song: 'Get Lucky'
    }
    // WORKS
},
{
  url: 'hey_baby.mp3',
  artist: {
      name: 'No Doubt',
      song: 'Hey Baby'
  }
  // got skipped over ASAP
},
{
  url: 'lion_sleeps_tonight.mp3',
  artist: {
      name: 'NSYNC',
      song: 'The Lion Sleeps Tonight'
  }
  // got skipped over ASAP
},
  {
      url: 'https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM',
      artist: {
          name: 'Outkast',
          song: 'Hey Ya'
      }
      // gets skipped over
  },
  {
      url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
      artist: {
          name: 'Michael Buble',
          song: 'Feeling Good'
      }
      // WORKS
  },
  {
      url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
      artist: {
          name: 'Metallica',
          song: 'Fuel'
      }
      // WORKS
  }

];

function Notes() {
//   Setting our component's initial state
  const [notes, setNotes] = useState([])
  const [formObject, setFormObject] = useState({
    destination: "",
    season: "",
    food: "",
    activities: "",
    sights: ""
  })

  // Load all notes and store them with setNotes
  useEffect(() => {
    loadNotes()
  }, [])

  // Loads all notes and sets them to notes
  function loadNotes() {
    API.getNotes()
      .then(res => 
        setNotes(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a note from the database with a given id, then reloads notes from the db
  function deleteNote(id) {
    API.deleteNote(id)
      .then(res => loadNotes())
      .catch(err => console.log(err));
  };

  //Updates a note 
  function updateNote(id) {
    API.updateNote(id,{
      destination: formObject.destination,
      season: formObject.season,
      food: formObject.food,
      activities: formObject.activities,
      sights: formObject.sights
    })
    .then(res => loadNotes())
    .catch(err => console.log(err));
  };


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveNote method to save the note data
  // Then reload notes from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.destination) {
      API.saveNote({
        destination: formObject.destination,
        season: formObject.season,
        food: formObject.food,
        activities: formObject.activities,
        sights: formObject.sights
      })
        .then(() => setFormObject({
            destination: "",
            season: "",
            food: "",
            activities: "",
            sights: ""
        }))
        .then(() => loadNotes())
        .catch(err => console.log(err));
    }
  };

  function GetValue() {
    var myarray= new Array(
      "Aspen, Colorado",
      "L.A., California",
      "San Francisco, California",
      "San Diego, California",
      "Mexico City, Mexico",
      "Cancun, Mexico",
      "Paris, France",
      "Provence France",
      "Florence Italy",
      "Rome Italy",
      "Venice Italy",
      "Madrid Spain",
      "Munich Germany",
      "Berlin Germany",
      "Frankfurt Germany",
      "Athens Greece",
      "Santorini Greece",
      "New Delhi, India",
      "Tokyo Japan",
      "Harajuku Japan",
      "Beijing China",
      "Shanghai China",
      "Kyoto Japan",
      "Dubai, U.A.E.",
      "Marrakesh Morocco",
      "Casablanca Morocco",
      "Long Island City, New York",
      "Seattle, Washington",
      "Boston, Massachusetts",
      "New Orleans, Louisiana",
      "Honolulu, Hawaii",
      "Anchorage, Alaska",
      "London, England",
      "Maui, Hawaii",
      "Montreal, Canada",
      "Quebec, Canada",
      "Vancouver, Canada",
      "Sao Paolo, Brazil",
      "Bogota, Columbia",
      "Seoul, Korea",
      "Montauk, New York",
      "Sag Harbor, New York",
      "Zimbabwe, Africa",
      "Cape Town, South Africa",
      "Zimbabwe, Africa",
      "Sydney, Australia",
      "Bora Bora",
      "Tahiti",
      "The Maldives",
      "Edinburgh, Scotland",
      "Inverness, Scotland",
      "Dublin, Ireland",
      "Belfast, Northern Ireland",
      "Melbourne, Australia",
      "Gold Coast, Australia",
      "Kangaroo Island, Australia",
      "Crete, Greece",
      "Prague, Czech Republic",
      "Helsinki, Finland",
      "Stockholm, Sweden",
      "Monaco, France",
      "Lisbon, Portugal",
      "Barcelona, Spain",
      "Copenhagen, Denmark",
      "Vienna, Austria",
      "Bucharest, Romania",
      "Moscow, Russia",
      "St. Petersburg, Russia",
      "Orlando, Florida",
      "Taipei, Taiwan",
      "Kuala Lumpur, Malaysia",
      "Kathmandu, Nepal",
      "Singapore, Malaysia",
      "Manila, Philippines",
      "Jakarta, Indonesia",
      "Istanbul, Turkey",
      "Portland, Oregon",
      "Las Vegas, Nevada",
      "Santa Fe, New Mexico",
      "Savannah, Georgia",
      "Atlanta, Georgia",
      "Salem, Massachusetts",
      "Washington D.C.",
      "Chicago, Illinois",
      "Miami, Florida",
      "Salt Lake City, Utah",
      "Napa Valley, California",
      "Phuket, Thailand",
      "Machu Picchu, Peru",
      "Amsterdam, Netherlands",
      "Dallas, Texas",
      "Rio De Janeiro, Brazil",
      "Costa Rica",
      "Bali, Indonesia",
      "Dubrovnik, Croatia",
      "Paro Valley, Bhutan",
      "Havana, Cuba",
      "Auckland, New Zealand",
      "Waiheke Island, New Zealand",
      "Santiago, Chile"
    );

    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

//THIS IS THE FUNCTION FOR THE LIFE ADVICE ARRAY.
function GetSecondValue() {
  var mysecondarray= new Array(
    "Try a new breakfast recipe.",
    "Do whatever makes you feel good.",
    "Drink more water.",
    "Walk everywhere.",
    "Make a list of everything you’re excited about.",
    "Start a new passion project.",
    "Call all of the people you love.",
    "Buy yourself flowers.",
    "Learn a party trick.",
    "Find a rainbow.",
    "Go to a fortune teller or psychic.",
    "Buy a back scratcher.",
    "Write down all the things you feel lucky for.",
    "Go to the movies by yourself.",
    "Post a few selfies.",
    "Work on your posture.",
    "Be nice.",
    "Friends night out (or in).",
    "Stand up for yourself.",
    "Ask for what you want.",
    "Get. Stuff. Done.",
    "Give yourself a pep talk.",
    "Make your own scavenger hunt.",
    "Order two desserts.",
    "Check out that antique shop you always drive by.",
    "Road trip to a weird diner.",
    "Start decorating your future home.",
    "Write down all your dreams.",
    "Look on the bright side.",
    "Plant a lemon tree for future lemonade.",
    "Watch a movie on VHS.",
    "Listen to your favorite song from middle school.",
    "Go to a drive-in movie.",
    "Watch the sunrise.",
    "Read through old text messages.",
    "Take a walk in a new neighborhood.",
     "Set aside some time to meditate.",
    "Take a mental health day.",
    "Say no to that thing you don’t want to do!",
    "Apply for your dream job!",
    "Set a goal for the day and then do it.",
    "De-clutter!",
    "Open that bottle of wine you were saving!",
    "Treat yourself to a massage!",
    "Get some fresh air.",
    "Make a super chill playlist.",
    "Stay in pajamas all day.",
    "Yes, dye your hair that color.",
    "Order your pie à la mode.",
    "Let someone know how happy they make you.",
    "Start a new holiday tradition.",
    "Tip your waiter a little more than usual.", 
    "Shop for shoes.",
	  "Bake a dessert for friends and family.",
	  "Scribble in a coloring book.",
	  "Try a Pinterest craft.",
	  "Upload old vacation photos to social media.",
	  "Organize your bookshelves (by title or by genre).",
	  "Take a staycation.",
	  "Rearrange your furniture.",
	  "Deep-clean your house.",
	  "Listen to podcasts or an audiobook.",
	  "Analyze your dreams.",
	  "Map out your birth chart.",
	  "Learn to mix your own cocktail.",
	  "Get a haircut.",
	  "Volunteer at a charity.",
	 "Give yourself a facial.",
	 "Practice your outdoor photography.",
	 "Have a garage sale.",
	 "Start a new book series.",
	 "Take photos of your old pics and yearbooks for future #TBTs.",
	 "Try a 10-minute workout.",
	 "Ride your bike around town.",
	 "Organize a picnic.",
	 "Complete a puzzle.",
	 "Buy something you’ve always wanted.",
	 "Make yourself tea.",
	 "Listen to a new genre of music.",
	 "Build a fort.",
	 "Buy a pet.",
	 "Take courses at a community college.",
	 "Write a poem.",
	 "Paint a mug.",
	 "Find a pen pal.",
	 "Try the free samples at Costco.",
	 "Start a scrapbook.",
	 "Buy art.",
	 "Find a vintage outfit.",
	 "Compliment a few strangers.",
	 "Enter a contest.",
	 "Pick fruit.",
	 "Map out your family tree.",
   "Collect seashells or rocks.",
	 "Learn a new language.",
	 "Create a terrarium.",
	 "Camp in your backyard.",
	 "Go bowling.",
	 "Paint your house.",
  "Update your résumé."
    
  );

  var random = mysecondarray[Math.floor(Math.random() * mysecondarray.length)];
  //alert(random);
  document.getElementById("secondmessage").innerHTML=random;
}

    return (
      <div id="parent">

        {/* begin columns-in-thirds! */}
        <div className="columns"> 

        {/* first one */}
        <div className="column is-one-third" id="funstuff"> 
        <h1 id="yournotesheading">Other Fun Stuff</h1>


        <div id="randomclicker">
                <p id="regularmessage"> Don't know where you wanna go? Click here for some ideas!</p>
                <br></br>
                <input 
                id="btnSearch" 
                type="button" 
                value="Your next vacay is..."
                onClick={GetValue} />
                <br></br>
                <p id="message" ></p>
                <br></br>
            </div>

          <br></br>

          <div id="seperator">
          </div>

          <br></br>
          <br></br>

          <div id="randomclicker2">
                <p id="changeupmessage"> Need to change things up? </p>
                <input 
                id="secondbtnSearch" 
                type="button" 
                defaultValue="Spontaneous Life Advice"
                onClick={GetSecondValue} />

                <br></br>
                <p id="secondmessage" ></p>
                <br></br>
            </div>

        </div>


        {/* second one */}
        <div className="column is-one-third" id="new-note-area">
        <h1 id="yournotesheading">Vacay Ideas</h1>
          <form>
             <TextArea id="textfield" className="column is-full"
               onChange={handleInputChange}
               name="destination"
               placeholder="Where woud you go right now if you could?"
               value={formObject.destination}
            />
            <br></br>
             <TextArea id="textfield" className="column is-full"
              onChange={handleInputChange}
              name="season"
               placeholder="Summer, Spring, Fall, Winter, or all four?"
               value={formObject.season}
             />
             <br></br>
             <TextArea id="textfield" className="column is-full"
               onChange={handleInputChange}
               name="food"
               placeholder="Sushi? Poutine? Tiramisu? Escargo?"
               value={formObject.food}
             />
             <br></br>
             <TextArea id="textfield" className="column is-full"
               onChange={handleInputChange}
               name="activities"
               placeholder="Spa day? Catch up with friends? Museum tours?"
               value={formObject.activities}
             />
             <br></br>
           <TextArea id="textfield" className="column is-full"
               onChange={handleInputChange}
               name="sights"
               placeholder="Volcanoes, pyramids, Eiffel Tower, Taj Mahal..."
               value={formObject.sights}
             /> 
             <br></br>

            <FormBtn className="" id="notesubmitbtn"
              disabled={!(formObject.destination)}
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          {/* <p id="jamsmessage"> Listen to some jams!</p>
          <ReactMusicPlayer songs={songs} /> */}

        </div>

       {/* third one */}
        <div className="column is-one-third" id="old-note-area">
            <h1 id="yournotesheading">Your Notes</h1>
          {notes.length ? (
            <List>
              {notes.map(note => {
                return (

                  <ListItem key={note._id}>
                    <a href={"/notes/" + note._id} id="linkcolors">
                      <strong>
                      <DeleteBtn onClick={(e) => {
                        e.preventDefault();
                        deleteNote(note._id)
                      }} 
                        />  
                        {note.destination}
                      </strong>
                      <br></br>
                      {note.season} 
                      <br></br>
                      {note.food} 
                      <br></br>
                      {note.activities} 
                      <br></br>
                      {note.sights} 
                      <br></br>
                    </a>
                    <br></br>
                  </ListItem>

                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>

    {/* end columns-in-thirds. */}
    </div>

    </div>
    );
  }

export default Notes;
