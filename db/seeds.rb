# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)
user1 = User.create!(first_name: "Guest", last_name: "User", password: "123123", email: "guestUser@tunedin.com",
  current_position: "Sample Current Position", location: "Sample Location")
  Experience.create!(user_id: user1.id, company_name: "Columbia Records",
  title: "Producer", location: "New York, New York", description: "Computers are about making life easier in much the same way that the Republican party is about fiscal responsibility and a culture of life.")
  Experience.create!(user_id: user1.id, company_name: "Blue Note Records",
  title: "Audio Engineer", location: "Boston, MA", description: "Programming graphics in X is like finding the square root of PI using Roman numerals.")
  Education.create!(user_id: user1.id, school: "University of Virginia", degree: "Bachelors of Science",
  field_of_study: "Mechanical Engineering", dates_attended: "1920 - 1923", grade: "3.6", activities: "UVA Boxing, Sigma Alpha Theta",
   description: "Programming is like sex: one mistake and you’re providing support for a lifetime." )

user2 = User.create!(first_name: "Quee", last_name: "Queg", password: "123123", email: "queequeg@gmail.com",
            current_position: "Harpooner", location: "Boston", image: File.open('app/assets/images/pic1.jpeg', 'rb') )
            Experience.create!(user_id: user2.id, company_name: "Whales4U",
            title: "Harpooner", location: "Boston", description: "On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.”")
            Experience.create!(user_id: user2.id, company_name: "Cameroon general hospital",
            title: "Witch Doctor", location: "Cameroon", description: "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.")
            Education.create!(user_id: user2.id, school: "Boston University", degree: "Bachelors of Science",
            field_of_study: "Marine Biology", dates_attended: "1920 - 1923", grade: "3.6", activities: "BU Fishermen, Sigma Alpha Theta",
             description: "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe." )

user3 = User.create!(first_name: "Azealia", last_name: "Banks", password: "123123", email: "banks@gmail.com",
            current_position: "Unemployed", location: "New York", image: File.open('app/assets/images/pic2.jpeg', 'rb') )
            Experience.create!(user_id: user3.id, company_name: "Whales4U",
            title: "Unemployed", location: "New York", description: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.")
            Education.create!(user_id: user3.id, school: "New York University", degree: "Bachelors of Arts",
            field_of_study: "English", dates_attended: "2004 - 2008", grade: "2.9", activities: "Step Team, NYU Improv",
             description: "" )

user4 = User.create!(first_name: "Rick", last_name: "Ross", password: "123123", email: "rickross@gmail.com",
            current_position: "Boss", location: "Miami", image: File.open('app/assets/images/pic3.jpeg', 'rb') )
            Experience.create!(user_id: user4.id, company_name: "Disney",
            title: "Songwriter", location: "Boston", description: "There are only two kinds of programming languages: those people always bitch about and those nobody uses.")
            Experience.create!(user_id: user4.id, company_name: "Big boy records",
            title: "CEO", location: "Miami", description: "Linux is only free if your time has no value.")
            Education.create!(user_id: user4.id, school: "University of Florida", degree: "Bachelors of Arts",
            field_of_study: "Economics", dates_attended: "2000 - 2004", grade: "3.3", activities: "President of UF business fraternity",
             description: "I don’t care if it works on your machine! We are not shipping your machine!" )

user5 = User.create!(first_name: "Kanye", last_name: "West", password: "123123", email: "kanyewest@gmail.com",
            current_position: "Fashion Designer", location: "New York", image: File.open('app/assets/images/pic4.jpeg', 'rb') )
            Experience.create!(user_id: user5.id, company_name: "RocNation",
            title: "Producer", location: "New York", description: "It always takes longer than you expect, even when you take into account Hofstadter’s Law.
-Hofstadter’s Law")
            Experience.create!(user_id: user5.id, company_name: "Starbucks",
            title: "Barista", location: "Chicago", description: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.")
            Education.create!(user_id: user5.id, school: "University of Chicago", degree: "Bachelors of Arts",
            field_of_study: "Music theory", dates_attended: "2003 - 2006", grade: "3.0", activities: "Jazz band, Marching band",
             description: "" )

user6 = User.create!(first_name: "Biggie", last_name: "Smalls", password: "123123", email: "biggiesmalls@gmail.com",
            current_position: "Fry Cook", location: "Atlanta", image: File.open('app/assets/images/pic5.jpeg', 'rb') )
            Experience.create!(user_id: user6.id, company_name: "PopEyes",
            title: "Fry cook", location: "Atlanta", description: "C++ : Where friends have access to your private members.")
            Experience.create!(user_id: user6.id, company_name: "RocafellaRecords",
            title: "Rapper", location: "New York", description: "I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.")
            Education.create!(user_id: user6.id, school: "Fordham University", degree: "Bachelors of Arts",
            field_of_study: "Religion", dates_attended: "1992 - 1996", grade: "2.6", activities: "Fordham football captain and DL",
             description: "In theory, theory and practice are the same. In practice, they’re not." )

user7 = User.create!(first_name: "Marky", last_name: "Mark", password: "123123", email: "markymark@gmail.com",
            current_position: "Actor", location: "Boston", image: File.open('app/assets/images/pic6.jpeg', 'rb') )
            Experience.create!(user_id: user7.id, company_name: "Boston Records",
            title: "Manager", location: "Boston", description: "If Java had true garbage collection, most programs would delete themselves upon execution.")
            Experience.create!(user_id: user7.id, company_name: "Berklee College of Music",
            title: "Assistant Proffesor", location: "Boston", description: "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.")
            Education.create!(user_id: user7.id, school: "Harvard University", degree: "Bachelors of Arts",
            field_of_study: "Quantum Physics", dates_attended: "1998 - 2002", grade: "2.9", activities: "Harvard Music Society",
             description: "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil." )

user8 = User.create!(first_name: "P", last_name: "Diddy", password: "123123", email: "pdiddy@gmail.com",
            current_position: "Fry Cook", location: "Atlanta", image: File.open('app/assets/images/pic7.jpeg', 'rb') )
            Experience.create!(user_id: user8.id, company_name: "MTV",
            title: "Director", location: "New York", description: "Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing.")
            Experience.create!(user_id: user8.id, company_name: "Columbia Records",
            title: "Talent Scout", location: "New York", description: "We know about as much about software quality problems as they knew about the Black Plague in the 1600s. We’ve seen the victims’ agonies and helped burn the corpses. We don’t know what causes it; we don’t really know if there is only one disease. We just suffer — and keep pouring our sewage into our water supply.")
            Education.create!(user_id: user8.id, school: "Columbia University", degree: "Bachelors of Science",
            field_of_study: "Mathematics", dates_attended: "1991 - 1995", grade: "1.6", activities: "Chess club, Zeta Psi Fraternity",
             description: "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer." )

user9 = User.create!(first_name: "John", last_name:  "Smith", password: "123123", email: "johnsmith@gmail.com",
            current_position: "Manager", location: "Oklahoma", image: File.open('app/assets/images/pic8.jpeg', 'rb') )
            Experience.create!(user_id: user9.id, company_name: "OKC Records",
            title: "Manager", location: "Oklahoma", description: "I love deadlines. I like the whooshing sound they make as they fly by.")
            Experience.create!(user_id: user9.id, company_name: "OKC records",
            title: "Intern", location: "Oklahoma", description: "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.")
            Education.create!(user_id: user9.id, school: "Oklahoma University", degree: "Bachelors of Science",
            field_of_study: "Chemistry", dates_attended: "2004 - 2008", grade: "3.8", activities: "OU Choir",
             description: "There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors." )

user10 = User.create!(first_name: "Davey", last_name:  "Crocket", password: "123123", email: "daveycrocket@gmail.com",
            current_position: "Sound Engineer", location: "Los Angeles", image: File.open('app/assets/images/pic9.jpeg', 'rb') )
            Experience.create!(user_id: user10.id, company_name: "LA Sound",
            title: "Sound Engineer", location: "Los Angeles", description: "XML is like violence – if it doesn’t solve your problems, you are not using enough of it.")
            Experience.create!(user_id: user10.id, company_name: "In N Out Burger",
            title: "Burger Maker", location: "LA", description: "Computers are like bikinis. They save people a lot of guesswork.")
            Education.create!(user_id: user10.id, school: "UCLA", degree: "Bachelors of Science",
            field_of_study: "Computer Science", dates_attended: "2000 - 2004", grade: "3.3", activities: "UCLA jazz band",
             description: "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone." )

user11 = User.create!(first_name: "Jordan", last_name:  "Cushman", password: "123123", email: "jcush@gmail.com",
            current_position: "Drummer", location: "Colorado", image: File.open('app/assets/images/pic10.jpeg', 'rb') )
            Experience.create!(user_id: user11.id, company_name: "Disney",
            title: "Drummer", location: "Colorado", description: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.")
            Experience.create!(user_id: user11.id, company_name: "Chuck E Cheese",
            title: "Drummer", location: "Colorado", description: "Perl – The only language that looks the same before and after RSA encryption.")
            Education.create!(user_id: user11.id, school: "Penn State", degree: "Bachelors of Arts",
            field_of_study: "History", dates_attended: "2001 - 2005", grade: "2.8", activities: "Marching Band",
             description: "You should name a variable using the same care with which you name a first-born child." )


user12 = User.create!(first_name: "Corey", last_name:  "Kibwe", password: "123123", email: "coreykibwe@gmail.com",
            current_position: "Sound Engineer", location: "Virginia", image: File.open('app/assets/images/pic11.jpeg', 'rb') )
            Experience.create!(user_id: user12.id, company_name: "VA Records",
            title: "Sound Engineer", location: "Virginia", description: "In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.")
            Education.create!(user_id: user12.id, school: "Virginia Tech", degree: "Bachelors of Science",
            field_of_study: "Computer Science", dates_attended: "2002 - 2006", grade: "3.5", activities: "Virginia Tech jazz band",
             description: "Beware of bugs in the above code; I have only proved it correct, not tried it." )

user13 = User.create!(first_name: "Greg", last_name:  "Vogt", password: "123123", email: "gregvogt@gmail.com",
            current_position: "Sound Engineer", location: "Texas", image: File.open('app/assets/images/pic12.jpeg', 'rb') )
            Experience.create!(user_id: user13.id, company_name: "Texas Music",
            title: "Sound Engineer", location: "San Antonio, Texas", description: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.")

            Education.create!(user_id: user13.id, school: "Berklee College of Music", degree: "Bachelors of Arts",
            field_of_study: "Sound Engineering", dates_attended: "2000 - 2004", grade: "3.8", activities: "Berklee Tech",
             description: "Walking on water and developing software from a specification are easy if both are frozen." )

user14 = User.create!(first_name: "John", last_name:  "Cusack", password: "123123", email: "johncusack@gmail.com",
            current_position: "Composer", location: "Alaska", image: File.open('app/assets/images/pic13.jpeg', 'rb') )
            Experience.create!(user_id: user14.id, company_name: "AK Music",
            title: "Composer", location: "Anchorage, Alaska", description: "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.")

            Education.create!(user_id: user14.id, school: "Rice University", degree: "Bachelors of Science",
            field_of_study: "Quantum Physics", dates_attended: "2006 - 2007", grade: "3.2", activities: "Rice Classical Music Society",
             description: "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry." )

user15 = User.create!(first_name: "Vincent", last_name:  "Antonio", password: "123123", email: "vincentantonio@gmail.com",
            current_position: "Composer", location: "North Carolina", image: File.open('app/assets/images/pic14.jpeg', 'rb') )
            Experience.create!(user_id: user15.id, company_name: "NC Music",
            title: "Composer", location: "Raleigh, North Carolina", description: "The difference between theory and practice is that in theory, there is no difference between theory and practice.")

            Education.create!(user_id: user15.id, school: "North Carolina University", degree: "Bachelors of Science",
            field_of_study: "Chemistry", dates_attended: "2007 - 2011", grade: "3.4", activities: "NCU Music Alliance",
             description: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." )

user16 = User.create!(first_name: "Emily", last_name:  "Jackson", password: "123123", email: "petermitchell@gmail.com",
          current_position: "Producer", location: "Washington", image: File.open('app/assets/images/pic15.jpeg', 'rb') )
          Experience.create!(user_id: user16.id, company_name: "WA Music",
          title: "Mixer/Masterer", location: "Washington", description: "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.")

          Education.create!(user_id: user16.id, school: "Washington University", degree: "Bachelors of Science",
          field_of_study: "Biology", dates_attended: "2009 - 2013", grade: "3.9", activities: "Theta Pi Fraternity",
           description: "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals." )


user17 = User.create!(first_name: "Jesse", last_name:  "Jones", password: "123123", email: "denisecurr@gmail.com",
            current_position: "Composer", location: "Boston", image: File.open('app/assets/images/pic1.jpeg', 'rb') )
            Experience.create!(user_id: user17.id, company_name: "Boston Music Company",
            title: "Composer", location: "Boston Massachusettes", description: "There are two major products that come out of Berkeley: LSD and UNIX. We don’t believe this to be a coincidence.")
            Experience.create!(user_id: user17.id, company_name: "Berklee College of Music",
            title: "Professor", location: "Boston", description: "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.")
            Education.create!(user_id: user17.id, school: "Boston Conservatory", degree: "Bachelors of Arts",
            field_of_study: "Music Composition", dates_attended: "2010 - 2014", grade: "3.8", activities: "Pit Orchestra",
             description: "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems." )

Connection.create!(connector_id: user17.id, connectee_id: user1.id)
Connection.create!(connector_id: user16.id, connectee_id: user1.id)
Connection.create!(connector_id: user15.id, connectee_id: user1.id)
Connection.create!(connector_id: user14.id, connectee_id: user1.id)
Connection.create!(connector_id: user13.id, connectee_id: user1.id)
Connection.create!(connector_id: user4.id, connectee_id: user1.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user5.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user6.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user7.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user8.id, status: "connected")
Connection.create!(connector_id: user4.id, connectee_id: user9.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user10.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user11.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user12.id, status: "connected")


Post.create!(user_id: user1.id, title: "Welcome!", body:"Welcome to TunedIn! Feel free to look around, make stuff, and destroy stuff. Right now you're on the homepage, where you can create and delete your own posts, and look at all the posts of people you're connected to. From the navbar you can navigate to your profile page, or the connections page which lists all users you're connected to. Have fun!")
Post.create!(user_id: user6.id, title: "What", body:"'Time is money and money can't buy you love and I love your outfit' - T.H.U.N.D.E.R. #1 ")
Post.create!(user_id: user7.id, title: "Important question", body:"When can the physiology stick an appeal?")
Post.create!(user_id: user8.id, title: "Words", body:"Good luck figuring these words out:    semimaliciousness piqueria hemiramphidae diagnostication")
Post.create!(user_id: user9.id, title: "My thoughts", body:"The bad reputation UNIX has gotten is totally undeserved, laid on by people who don't understand, who have not gotten in there and tried anything")
Post.create!(user_id: user10.id, title: "A wiseman once said", body:"To err is human, to forgive, beyond the scope of the Operating System. ")
Post.create!(user_id: user11.id, title: "Jokes", body:"A bug in the code is worth two in the documentation. ")
Post.create!(user_id: user12.id, title: "What a deal", body:"This login session: $13.76, but for you $11.88. ")
Post.create!(user_id: user13.id, title: "Observation", body:"On the Internet, nobody knows you're a dog.")
Post.create!(user_id: user14.id, title: "Punny", body:"My sister opened a computer store in Hawaii. She sells C shells down by the seashore")
