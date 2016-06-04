# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)
user = User.create!(first_name: "Quee", last_name: "Queg", email: "queequeg@gmail.com",
            current_position: "Harpooner", location: "Boston" )
#             Experience.create!(user_id: user.id, company_name: "Whales4U",
#             title: "Harpooner", location: "Boston", description: "I throw harpoons at whales")
#             Experience.create!(user_id: user.id, company_name: "Cameroon general hospital",
#             title: "Witch Doctor", location: "Cameroon", description: "I heal people with black magic")
#
# user = User.create!(first_name: "Azealia", last_name: "Banks", email: "banks@gmail.com",
#             current_position: "Unemployed", location: "New York" )
#             Experience.create!(user_id: user.id, company_name: "Whales4U",
#             title: "Unemployed", location: "New York", description: "I start fights on Twitter")
#
# user = User.create!(first_name: "Rick", last_name: "Ross", email: "rickross@gmail.com",
#             current_position: "Boss", location: "Miami" )
#             Experience.create!(user_id: user.id, company_name: "Whales4U",
#             title: "Harpooner", location: "Boston", description: "I throw harpoons at whales")
#             Experience.create!(user_id: user.id, company_name: "Cameroon general hospital",
#             title: "Witch Doctor", location: "Cameroon", description: "I heal people with black magic")
#
#
# user = User.create!(first_name: "Kanye", last_name: "West", email: "kanyewest@gmail.com",
#             current_position: "God", location: "New York" )
#             Experience.create!(user_id: user.id, company_name: "RocNation",
#             title: "Producer", location: "New York", description: "I make dope beats")
#             Experience.create!(user_id: user.id, company_name: "Starbucks",
#             title: "Barista", location: "Chicago", description: "I make dope coffee")
#
#
# user = User.create!(first_name: "Biggie", last_name: "Smalls", email: "biggiesmalls@gmail.com",
#             current_position: "Fry Cook", location: "Atlanta" )
#             Experience.create!(user_id: user.id, company_name: "PopEyes",
#             title: "Fry cook", location: "Atlanta", description: "I make fried chicken")
#             Experience.create!(user_id: user.id, company_name: "RocafellaRecords",
#             title: "Rapper", location: "New York", description: "I rap"
#
# user = User.create!(first_name: "Lil", last_name: "Wayne", email: "lilwayne@gmail.com",
#             current_position: "Skateboarder", location: "New Orleans" )
#             Experience.create!(user_id: user.id, company_name: "WeezyBoards",
#             title: "CEO", location: "New Orleans", description: "I ride skateboards")
#             Experience.create!(user_id: user.id, company_name: "Young Money",
#             title: "Rapper", location: "Atlanta", description: "I drink cough syrup")
#
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
