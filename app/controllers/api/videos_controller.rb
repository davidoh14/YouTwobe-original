class Api::VideosController < ApplicationController
    def index
        @posts = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end
end

# before_action: create, edit, edit, require_logged_in