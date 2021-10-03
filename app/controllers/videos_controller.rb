class VideosController < ApplicationController
    def show
        @video = Video.find_by(id: params[:id])
        
        if @video 
            # @video.update(view_count: view_count+=1)
            render :show
         else 
            render json: @video.errors.full_messages, status: 422
         end
        
    end

    def index

    end

    def create
        @video = Video.new(video_params)
        
        if @video.save 
          render :show
        else 
          render json: @video.errors.full_messages, status: 422
        end
    
    end

    def update

    end

    def destoy
          @video = Video.find(params[:id])

          if @video.destroy 
            render json: @video.id
          else
            render json: @video.errors.full_messages, status: 422
          end
    end

    private
    def video_params
        params.require(:video).permit(:title, :description)
    end
end
