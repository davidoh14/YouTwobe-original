class VideosController < ApplicationController
    def show
        @video = Video.find_by(id: params[:id])
        
        render :show
    end
end
