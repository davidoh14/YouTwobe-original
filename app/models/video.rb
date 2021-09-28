class Video < ApplicationRecord
    validates :title, presence: true, length: {maximum: 70}
    validates :description, length: {maximum: 5000}

    # has_one_attached :video
    # has_one_attached :thumbnail
    # has_one :uploader
    
    
end