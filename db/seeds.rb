# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Video.destroy_all
User.destroy_all

user1 = User.create({username:"Ian",password:"test",email:"ian@email.com",first_name:"Ian", last_name:"McGrath"})
user2 = User.create({username:"Vincent",password:"test",email:"vincent@email.com",first_name:"Vincent", last_name:"Hsu"})
user3 = User.create({username:"Jimmy",password:"test",email:"jimmy@email.com",first_name:"Jimmy", last_name:"Kuang"})
user4 = User.create({username:"Darrick",password:"test",email:"darrick@email.com",first_name:"Darrick", last_name:"Shin"})
user5 = User.create({username:"Jon",password:"test",email:"jon@email.com",first_name:"Jon", last_name:"Zamora"})
user6 = User.create({username:"Vern",password:"test",email:"vern@email.com",first_name:"Vern", last_name:"Chao"})
user7 = User.create({username:"Arwen",password:"test",email:"Arwen@email.com",first_name:"Arwen", last_name:"Kim"})
user8 = User.create({username:"ProZD", password:"test",email:"ProZD@email.com", first_name: "Pro", last_name: "ZD"})



vid1 = Video.new({
    title: "squirrel", 
    description: "Ring.com shared an unexpected cute moment when a squirrel jumped onto the back of a UPS driver as he made a delivery.",
    uploader_id: user7.id,
    view_count: 0})

squirrelP = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/squirrel_thumbnail.png')
vid1.thumbnail.attach(io: squirrelP, filename: 'squirrel_thumbnail.png')

squirrel = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/squirrel240.mp4')
vid1.video.attach(io: squirrel, filename: 'squirrel240.mp4')

vid1.save

vid2 = Video.new({
    title: "rain", 
    description: "My Twitter: https://twitter.com/prozdkp",
    uploader_id: user8.id,
    view_count: 0})
    
rainP = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/rainPic.png')
vid2.thumbnail.attach(io: rainP, filename: 'rainPic.png')

rain = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/rain.mp4')
vid2.video.attach(io: rain, filename: 'rain.mp4')

vid2.save