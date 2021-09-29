json.array! @videos do |video| 
    json.extract! video, :id, :title, :uploader_id
    json.thumbnailUrl url_for(video.thumbnail)
end