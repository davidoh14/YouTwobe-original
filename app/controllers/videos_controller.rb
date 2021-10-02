class VideosController < ApplicationController
    def show
        # @video = Video.find_by(id: params[:id])
        @video = Video.find(params[:id])
        
        render :show
    end
end
