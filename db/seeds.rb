# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

user1 = User.create({username:"alpha",password:"alpha",email:"alpha.io"})
user2 = User.create({username:"bravo",password:"bravo",email:"bravo.io"})
user3 = User.create({username:"charlie",password:"charlie",email:"charlie.io"})
user4 = User.create({username:"delta",password:"delta",email:"delta.io"})
user5 = User.create({username:"echo",password:"echo",email:"echo.io"})
user6 = User.create({username:"foxtrot",password:"foxtrot",email:"foxtrot.io"})
user7 = User.create({username:"test", password:"test",email:"test"})
user8 = User.create({username:"ProZD", password:"test",email:"ProZD"})


vid1 = Video.create({
    title: "Squirrel jumps on UPS delivery man", 
    description: "Ring.com shared an unexpected cute moment when a squirrel jumped onto the back of a UPS driver as he made a delivery.",
    uploader_id: 7})

squirrelP = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/squirrel_thumbnail.png')
vid1.thumbnail.attach(io: squirrelP, filename: 'squirrelP.png')

squirrel = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/squirrel240.mp4')
vid1.video.attach(io: squirrel, filename: 'squirrel.mp4')

vid2 = Video.create({
    title: "people in LA every time it rains", 
    description: "My Twitter: https://twitter.com/prozdkp",
    uploader_id: 8})
    
rainP = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/rainPic.png')
vid2.thumbnail.attach(io: rainP, filename: 'rainP.png')

rain = open('https://youtwobe-seed.s3.us-east-2.amazonaws.com/rain.mp4')
vid2.video.attach(io: rain, filename: 'rain.mp4')