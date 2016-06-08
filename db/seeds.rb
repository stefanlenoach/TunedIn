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
  title: "Producer", location: "New York, New York", description: "Lorem ipsum dolor sit ame
  t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
  vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qual")
  Experience.create!(user_id: user1.id, company_name: "Blue Note Records",
  title: "Audio Engineer", location: "Boston, MA", description: "Lorem ipsum dolor sit ame
  t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
  vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, m")
  Education.create!(user_id: user1.id, school: "University of Virginia", degree: "Bachelors of Science",
  field_of_study: "Mechanical Engineering", dates_attended: "1920 - 1923", grade: "3.6", activities: "UVA Boxing, Sigma Alpha Theta",
   description: "Lorem ipsum dolor sit ame
   t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
   vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qualisque pro ea." )

user2 = User.create!(first_name: "Quee", last_name: "Queg", password: "123123", email: "queequeg@gmail.com",
            current_position: "Harpooner", location: "Boston" )
            Experience.create!(user_id: user2.id, company_name: "Whales4U",
            title: "Harpooner", location: "Boston", description: "I throw harpoons at whales")
            Experience.create!(user_id: user2.id, company_name: "Cameroon general hospital",
            title: "Witch Doctor", location: "Cameroon", description: "I heal people with black magic")
            Education.create!(user_id: user2.id, school: "Boston University", degree: "Bachelors of Science",
            field_of_study: "Marine Biology", dates_attended: "1920 - 1923", grade: "3.6", activities: "BU Fishermen, Sigma Alpha Theta",
             description: "I had to leave a year early to go whaling" )

user3 = User.create!(first_name: "Azealia", last_name: "Banks", password: "123123", email: "banks@gmail.com",
            current_position: "Unemployed", location: "New York" )
            Experience.create!(user_id: user3.id, company_name: "Whales4U",
            title: "Unemployed", location: "New York", description: "I start fights on Twitter")
            Education.create!(user_id: user3.id, school: "New York University", degree: "Bachelors of Arts",
            field_of_study: "English", dates_attended: "2004 - 2008", grade: "2.9", activities: "Step Team, NYU Improv",
             description: "" )

user4 = User.create!(first_name: "Rick", last_name: "Ross", password: "123123", email: "rickross@gmail.com",
            current_position: "Boss", location: "Miami" )
            Experience.create!(user_id: user4.id, company_name: "Whales4U",
            title: "Harpooner", location: "Boston", description: "I throw harpoons at whales")
            Experience.create!(user_id: user4.id, company_name: "Cameroon general hospital",
            title: "Witch Doctor", location: "Cameroon", description: "I heal people with black magic")
            Education.create!(user_id: user4.id, school: "University of Florida", degree: "Bachelors of Arts",
            field_of_study: "Economics", dates_attended: "2000 - 2004", grade: "3.3", activities: "President of UF business fraternity",
             description: "" )

user5 = User.create!(first_name: "Kanye", last_name: "West", password: "123123", email: "kanyewest@gmail.com",
            current_position: "God", location: "New York" )
            Experience.create!(user_id: user5.id, company_name: "RocNation",
            title: "Producer", location: "New York", description: "I make dope beats")
            Experience.create!(user_id: user5.id, company_name: "Starbucks",
            title: "Barista", location: "Chicago", description: "I make dope coffee")
            Education.create!(user_id: user5.id, school: "University of Chicago", degree: "Bachelors of Arts",
            field_of_study: "Music theory", dates_attended: "2003 - 2006", grade: "3.0", activities: "Jazz band, Marching band",
             description: "" )

user6 = User.create!(first_name: "Biggie", last_name: "Smalls", password: "123123", email: "biggiesmalls@gmail.com",
            current_position: "Fry Cook", location: "Atlanta" )
            Experience.create!(user_id: user6.id, company_name: "PopEyes",
            title: "Fry cook", location: "Atlanta", description: "I make fried chicken")
            Experience.create!(user_id: user6.id, company_name: "RocafellaRecords",
            title: "Rapper", location: "New York", description: "I rap")
            Education.create!(user_id: user6.id, school: "Fordham University", degree: "Bachelors of Arts",
            field_of_study: "Religion", dates_attended: "1992 - 1996", grade: "2.6", activities: "Fordham football captain and DL",
             description: "" )

user7 = User.create!(first_name: "Lil", last_name:  "Wayne", password: "123123", email: "lilwayne@gmail.com",
            current_position: "Skateboarder", location: "New Orleans" )
            Experience.create!(user_id: user7.id, company_name: "WeezyBoards",
            title: "CEO", location: "New Orleans", description: "I ride skateboards")
            Experience.create!(user_id: user7.id, company_name: "Young Money",
            title: "Rapper", location: "Atlanta", description: "I drink cough syrup")
            Education.create!(user_id: user7.id, school: "Alabama University", degree: "Bachelors of Science",
            field_of_study: "Physics", dates_attended: "2000 - 2004", grade: "3.8", activities: "AU Hybrid car team",
             description: "" )


Connection.create!(connector_id: user2.id, connectee_id: user1.id)
Connection.create!(connector_id: user3.id, connectee_id: user1.id)
Connection.create!(connector_id: user4.id, connectee_id: user1.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user5.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user6.id, status: "connected")
# User.create!(first_name: "Tupac", last_name: "Shakur", email: "tupac@gmail.com",
#             current_position: "Store Clerk", location: "Indonesia" )
#             Experience.create!(user_id: user.id, company_name: "7/11",
#             title: "Clerk", location: "Indonesia", description: "I run a convenience store, I'm still alive")
#
# User.create!(first_name: "Andre", last_name: "3000", email: "3stacks@gmail.com",
#             current_position: "Jet Propulsion Engineer", location: "California" )
#             Experience.create!(user_id: user.id, company_name: "NASA",
#             title: "Jet Propulsion Engineer", location: "California", description: "I design and maintain jet propulsion systems")
#             Experience.create!(user_id: user.id, company_name: "OutKast",
#             title: "CEO", location: "Atlanta", description: "Rapper")
