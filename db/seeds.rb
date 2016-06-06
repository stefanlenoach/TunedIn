# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)
user = User.create!(first_name: "Guest", last_name: "User", password: "123123", email: "guestUser@tunedin.com",
  current_position: "Sample Current Position", location: "Sample Location")



user = User.create!(first_name: "Quee", last_name: "Queg", password: "123123", email: "queequeg@gmail.com",
            current_position: "Harpooner", location: "Boston" )
            Experience.create!(user_id: user.id, company_name: "Whales4U",
            title: "Harpooner", location: "Boston", description: "I throw harpoons at whales")
            Experience.create!(user_id: user.id, company_name: "Cameroon general hospital",
            title: "Witch Doctor", location: "Cameroon", description: "I heal people with black magic")
            Education.create!(user_id: user.id, school: "Boston University", degree: "Bachelors of Science",
            field_of_study: "Marine Biology", dates_attended: "1920 - 1923", grade: "3.6", activities: "BU Fishermen, Sigma Alpha Theta",
             description: "I had to leave a year early to go whaling" )

user = User.create!(first_name: "Azealia", last_name: "Banks", password: "123123", email: "banks@gmail.com",
            current_position: "Unemployed", location: "New York" )
            Experience.create!(user_id: user.id, company_name: "Whales4U",
            title: "Unemployed", location: "New York", description: "I start fights on Twitter")
            Education.create!(user_id: user.id, school: "New York University", degree: "Bachelors of Arts",
            field_of_study: "English", dates_attended: "2004 - 2008", grade: "2.9", activities: "Step Team, NYU Improv",
             description: "" )

user = User.create!(first_name: "Rick", last_name: "Ross", password: "123123", email: "rickross@gmail.com",
            current_position: "Boss", location: "Miami" )
            Experience.create!(user_id: user.id, company_name: "Whales4U",
            title: "Harpooner", location: "Boston", description: "I throw harpoons at whales")
            Experience.create!(user_id: user.id, company_name: "Cameroon general hospital",
            title: "Witch Doctor", location: "Cameroon", description: "I heal people with black magic")
            Education.create!(user_id: user.id, school: "University of Florida", degree: "Bachelors of Arts",
            field_of_study: "Economics", dates_attended: "2000 - 2004", grade: "3.3", activities: "President of UF business fraternity",
             description: "" )

user = User.create!(first_name: "Kanye", last_name: "West", password: "123123", email: "kanyewest@gmail.com",
            current_position: "God", location: "New York" )
            Experience.create!(user_id: user.id, company_name: "RocNation",
            title: "Producer", location: "New York", description: "I make dope beats")
            Experience.create!(user_id: user.id, company_name: "Starbucks",
            title: "Barista", location: "Chicago", description: "I make dope coffee")
            Education.create!(user_id: user.id, school: "University of Chicago", degree: "Bachelors of Arts",
            field_of_study: "Music theory", dates_attended: "2003 - 2006", grade: "3.0", activities: "Jazz band, Marching band",
             description: "" )

user = User.create!(first_name: "Biggie", last_name: "Smalls", password: "123123", email: "biggiesmalls@gmail.com",
            current_position: "Fry Cook", location: "Atlanta" )
            Experience.create!(user_id: user.id, company_name: "PopEyes",
            title: "Fry cook", location: "Atlanta", description: "I make fried chicken")
            Experience.create!(user_id: user.id, company_name: "RocafellaRecords",
            title: "Rapper", location: "New York", description: "I rap")
            Education.create!(user_id: user.id, school: "Fordham University", degree: "Bachelors of Arts",
            field_of_study: "Religion", dates_attended: "1992 - 1996", grade: "2.6", activities: "Fordham football captain and DL",
             description: "" )

user = User.create!(first_name: "Lil", last_name:  "Wayne", password: "123123", email: "lilwayne@gmail.com",
            current_position: "Skateboarder", location: "New Orleans" )
            Experience.create!(user_id: user.id, company_name: "WeezyBoards",
            title: "CEO", location: "New Orleans", description: "I ride skateboards")
            Experience.create!(user_id: user.id, company_name: "Young Money",
            title: "Rapper", location: "Atlanta", description: "I drink cough syrup")
            Education.create!(user_id: user.id, school: "Alabama University", degree: "Bachelors of Science",
            field_of_study: "Physics", dates_attended: "2000 - 2004", grade: "3.8", activities: "AU Hybrid car team",
             description: "" )
#
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
