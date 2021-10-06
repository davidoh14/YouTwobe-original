json.extract! video, :id, :title, :description, :uploader_id

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
else
    json.thumbnail ""
end

if video.video.attached?
    json.video url_for(video.video)
else
    json.video ""
end

# if video.file
#     json.video url_for(video.file)
# else
#     json.video ""
# end

# if video.thumbnail
#     json.video url_for(video.thumbnail)
# else
#     json.video ""
# end