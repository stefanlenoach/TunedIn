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
            title: "Harpooner", location: "Boston", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user2.id, company_name: "Cameroon general hospital",
            title: "Witch Doctor", location: "Cameroon", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user2.id, school: "Boston University", degree: "Bachelors of Science",
            field_of_study: "Marine Biology", dates_attended: "1920 - 1923", grade: "3.6", activities: "BU Fishermen, Sigma Alpha Theta",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user3 = User.create!(first_name: "Azealia", last_name: "Banks", password: "123123", email: "banks@gmail.com",
            current_position: "Unemployed", location: "New York" )
            Experience.create!(user_id: user3.id, company_name: "Whales4U",
            title: "Unemployed", location: "New York", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user3.id, school: "New York University", degree: "Bachelors of Arts",
            field_of_study: "English", dates_attended: "2004 - 2008", grade: "2.9", activities: "Step Team, NYU Improv",
             description: "" )

user4 = User.create!(first_name: "Rick", last_name: "Ross", password: "123123", email: "rickross@gmail.com",
            current_position: "Boss", location: "Miami" )
            Experience.create!(user_id: user4.id, company_name: "Disney",
            title: "Songwriter", location: "Boston", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user4.id, company_name: "Big boy records",
            title: "CEO", location: "Miami", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user4.id, school: "University of Florida", degree: "Bachelors of Arts",
            field_of_study: "Economics", dates_attended: "2000 - 2004", grade: "3.3", activities: "President of UF business fraternity",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user5 = User.create!(first_name: "Kanye", last_name: "West", password: "123123", email: "kanyewest@gmail.com",
            current_position: "Fashion Designer", location: "New York" )
            Experience.create!(user_id: user5.id, company_name: "RocNation",
            title: "Producer", location: "New York", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user5.id, company_name: "Starbucks",
            title: "Barista", location: "Chicago", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user5.id, school: "University of Chicago", degree: "Bachelors of Arts",
            field_of_study: "Music theory", dates_attended: "2003 - 2006", grade: "3.0", activities: "Jazz band, Marching band",
             description: "" )

user6 = User.create!(first_name: "Biggie", last_name: "Smalls", password: "123123", email: "biggiesmalls@gmail.com",
            current_position: "Fry Cook", location: "Atlanta" )
            Experience.create!(user_id: user6.id, company_name: "PopEyes",
            title: "Fry cook", location: "Atlanta", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user6.id, company_name: "RocafellaRecords",
            title: "Rapper", location: "New York", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit ")
            Education.create!(user_id: user6.id, school: "Fordham University", degree: "Bachelors of Arts",
            field_of_study: "Religion", dates_attended: "1992 - 1996", grade: "2.6", activities: "Fordham football captain and DL",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user7 = User.create!(first_name: "Marky", last_name: "Mark", password: "123123", email: "markymark@gmail.com",
            current_position: "Actor", location: "Boston" )
            Experience.create!(user_id: user7.id, company_name: "Boston Records",
            title: "Manager", location: "Boston", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user7.id, company_name: "Berklee College of Music",
            title: "Assistant Proffesor", location: "Boston", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit ")
            Education.create!(user_id: user7.id, school: "Harvard University", degree: "Bachelors of Arts",
            field_of_study: "Quantum Physics", dates_attended: "1998 - 2002", grade: "2.9", activities: "Harvard Music Society",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user8 = User.create!(first_name: "P", last_name: "Diddy", password: "123123", email: "pdiddy@gmail.com",
            current_position: "Fry Cook", location: "Atlanta" )
            Experience.create!(user_id: user8.id, company_name: "MTV",
            title: "Director", location: "New York", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user8.id, company_name: "Columbia Records",
            title: "Talent Scout", location: "New York", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse,")
            Education.create!(user_id: user8.id, school: "Columbia University", degree: "Bachelors of Science",
            field_of_study: "Mathematics", dates_attended: "1991 - 1995", grade: "1.6", activities: "Chess club, Zeta Psi Fraternity",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user9 = User.create!(first_name: "John", last_name:  "Smith", password: "123123", email: "johnsmith@gmail.com",
            current_position: "Manager", location: "Oklahoma" )
            Experience.create!(user_id: user9.id, company_name: "OKC Records",
            title: "Manager", location: "Oklahoma", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user9.id, company_name: "OKC records",
            title: "Intern", location: "Oklahoma", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user9.id, school: "Oklahoma University", degree: "Bachelors of Science",
            field_of_study: "Chemistry", dates_attended: "2004 - 2008", grade: "3.8", activities: "OU Choir",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user10 = User.create!(first_name: "Davey", last_name:  "Crocket", password: "123123", email: "daveycrocket@gmail.com",
            current_position: "Sound Engineer", location: "Los Angeles" )
            Experience.create!(user_id: user10.id, company_name: "LA Sound",
            title: "Sound Engineer", location: "Los Angeles", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user10.id, company_name: "In N Out Burger",
            title: "Burger Maker", location: "LA", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user10.id, school: "UCLA", degree: "Bachelors of Science",
            field_of_study: "Computer Science", dates_attended: "2000 - 2004", grade: "3.3", activities: "UCLA jazz band",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user11 = User.create!(first_name: "Jordan", last_name:  "Cushman", password: "123123", email: "jcush@gmail.com",
            current_position: "Drummer", location: "Colorado" )
            Experience.create!(user_id: user11.id, company_name: "Disney",
            title: "Drummer", location: "Colorado", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user11.id, company_name: "Chuck E Cheese",
            title: "Drummer", location: "Colorado", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user11.id, school: "Penn State", degree: "Bachelors of Arts",
            field_of_study: "History", dates_attended: "2001 - 2005", grade: "2.8", activities: "Marching Band",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )


user12 = User.create!(first_name: "Corey", last_name:  "Kibwe", password: "123123", email: "coreykibwe@gmail.com",
            current_position: "Sound Engineer", location: "Virginia" )
            Experience.create!(user_id: user12.id, company_name: "VA Records",
            title: "Sound Engineer", location: "Virginia", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user12.id, school: "Virginia Tech", degree: "Bachelors of Science",
            field_of_study: "Computer Science", dates_attended: "2002 - 2006", grade: "3.5", activities: "Virginia Tech jazz band",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user13 = User.create!(first_name: "Greg", last_name:  "Vogt", password: "123123", email: "gregvogt@gmail.com",
            current_position: "Sound Engineer", location: "Texas" )
            Experience.create!(user_id: user13.id, company_name: "Texas Music",
            title: "Sound Engineer", location: "San Antonio, Texas", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")

            Education.create!(user_id: user13.id, school: "Berklee College of Music", degree: "Bachelors of Arts",
            field_of_study: "Sound Engineering", dates_attended: "2000 - 2004", grade: "3.8", activities: "Berklee Tech",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user14 = User.create!(first_name: "John", last_name:  "Cusack", password: "123123", email: "johncusack@gmail.com",
            current_position: "Composer", location: "Alaska" )
            Experience.create!(user_id: user14.id, company_name: "AK Music",
            title: "Composer", location: "Anchorage, Alaska", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")

            Education.create!(user_id: user14.id, school: "Rice University", degree: "Bachelors of Science",
            field_of_study: "Quantum Physics", dates_attended: "2006 - 2007", grade: "3.2", activities: "Rice Classical Music Society",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user15 = User.create!(first_name: "Vincent", last_name:  "Antonio", password: "123123", email: "vincentantonio@gmail.com",
            current_position: "Composer", location: "North Carolina" )
            Experience.create!(user_id: user15.id, company_name: "NC Music",
            title: "Composer", location: "Raleigh, North Carolina", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")

            Education.create!(user_id: user15.id, school: "North Carolina University", degree: "Bachelors of Science",
            field_of_study: "Chemistry", dates_attended: "2007 - 2011", grade: "3.4", activities: "NCU Music Alliance",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

user16 = User.create!(first_name: "Emily", last_name:  "Jackson", password: "123123", email: "petermitchell@gmail.com",
          current_position: "Mixer/Masterer", location: "Washington" )
          Experience.create!(user_id: user16.id, company_name: "WA Music",
          title: "Mixer/Masterer", location: "Washington", description: "Lorem ipsum dolor sit ame
          t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
          vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
       Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
       diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")

          Education.create!(user_id: user16.id, school: "Washington University", degree: "Bachelors of Science",
          field_of_study: "Biology", dates_attended: "2009 - 2013", grade: "3.9", activities: "Theta Pi Fraternity",
           description: "Lorem ipsum dolor sit ame
           t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
           vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
        Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
        diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )


user17 = User.create!(first_name: "Jesse", last_name:  "Jones", password: "123123", email: "denisecurr@gmail.com",
            current_position: "Composer", location: "Boston" )
            Experience.create!(user_id: user17.id, company_name: "Boston Music Company",
            title: "Composer", location: "Boston Massachusettes", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Experience.create!(user_id: user17.id, company_name: "Berklee College of Music",
            title: "Professor", location: "Boston", description: "Lorem ipsum dolor sit ame
            t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
            vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
         Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
         diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu")
            Education.create!(user_id: user17.id, school: "Boston Conservatory", degree: "Bachelors of Arts",
            field_of_study: "Music Composition", dates_attended: "2010 - 2014", grade: "3.8", activities: "Pit Orchestra",
             description: "Lorem ipsum dolor sit ame
             t, elit voluptua sea an. Posse ridens eam cu. Mundi sua
             vitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.
          Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus electram intellegat ei, an qui oratio decore nominati. Nisl au
          diam eloquentiam in ius. At cum ancillae sapientem, est in augue lucilius, movet qu" )

Connection.create!(connector_id: user17.id, connectee_id: user1.id)
Connection.create!(connector_id: user16.id, connectee_id: user1.id)
Connection.create!(connector_id: user4.id, connectee_id: user1.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user5.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user6.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user7.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user8.id, status: "connected")
Connection.create!(connector_id: user4.id, connectee_id: user9.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user10.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user11.id, status: "connected")
Connection.create!(connector_id: user1.id, connectee_id: user12.id, status: "connected")


Post.create!(user_id: user1.id, title: "Post1", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user5.id, title: "Post2", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user6.id, title: "Post3", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user7.id, title: "Post4", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user8.id, title: "Post5", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user9.id, title: "Post6", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user10.id, title: "Post7", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user11.id, title: "Post8", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user12.id, title: "Post9", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user13.id, title: "Post10", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
Post.create!(user_id: user14.id, title: "Post11", body:"Lorem ipsum dolor sit amet, elit voluptua sea an. Posse ridens eam cu. Mundi suavitate patrioque qui cu. Nam dicant oblique habemus te, sit dictas doctus mentitum at.Cibo vituperata constituam cu his. In per rebum congue vidisse, sit modus ele")
