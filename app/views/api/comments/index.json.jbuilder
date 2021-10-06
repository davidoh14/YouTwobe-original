@comments.each do |comment|
    json.set! comment.id do
        comment.partial! "api/comments/comment", comment: comment
    end
end