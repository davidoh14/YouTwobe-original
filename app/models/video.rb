class Video < ApplicationRecord
    validates :title, presence: true, length: {maximum: 70}
    validates :description, length: {maximum: 5000}
    validate :ensure_video
    validate :ensure_thumbnail

    has_one_attached :video
    has_one_attached :thumbnail

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User

    def ensure_video
        unless self.video.attached?
            errors[:video] << "Must upload a video file"
        end
    end

    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:video] << "Must upload a thumbnail file"
        end
    end
    
end
