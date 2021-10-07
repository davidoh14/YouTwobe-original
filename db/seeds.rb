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
Comment.destroy_all

user1 = User.create({username:"Ian",password:"test",email:"ian@email.com",first_name:"Ian", last_name:"McGrath"})
user2 = User.create({username:"Vincent",password:"test",email:"vincent@email.com",first_name:"Vincent", last_name:"Hsu"})
user3 = User.create({username:"Jimmy",password:"test",email:"jimmy@email.com",first_name:"Jimmy", last_name:"Kuang"})
user4 = User.create({username:"Darrick",password:"test",email:"darrick@email.com",first_name:"Darrick", last_name:"Shin"})
user5 = User.create({username:"Jon",password:"test",email:"jon@email.com",first_name:"Jon", last_name:"Zamora"})
user6 = User.create({username:"Vern",password:"test",email:"vern@email.com",first_name:"Vern", last_name:"Chao"})
user7 = User.create({username:"Yuhuan",password:"test",email:"Yuhuan@email.com",first_name:"Yuhuan", last_name:"Kim"})
user8 = User.create({username:"ProZD", password:"test",email:"ProZD@email.com", first_name: "Pro", last_name: "ZD"})



vid1 = Video.new({
    title: "squirrel", 
    description: "Ring.com shared an unexpected cute moment when a squirrel jumped onto the back of a UPS driver as he made a delivery.",
    uploader_id: user2.id,
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


com1 = Comment.create!({body: "wao", commenter_id: user1.id, video_id: vid1.id})
com2 = Comment.create!({body: "crazy", commenter_id: user2.id, video_id: vid1.id})
com3 = Comment.create!({body: "lulz", commenter_id: user3.id, video_id: vid1.id})
com4 = Comment.create!({body: "WAO", commenter_id: user4.id, video_id: vid1.id})
com5 = Comment.create!({body: "poggies", commenter_id: user5.id, video_id: vid2.id})
com6 = Comment.create!({body: "ffffffffffffff", commenter_id: user6.id, video_id: vid2.id})
com7 = Comment.create!({body: "I'm old greg", commenter_id: user7.id, video_id: vid2.id})
com8 = Comment.create!({body: "yeet", commenter_id: user8.id, video_id: vid1.id})