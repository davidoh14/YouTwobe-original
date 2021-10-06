class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def edit
        @comment = Comment.find_by(id: params[:id])
        
        if @comment
            @comment.update
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        
        if @comment
            @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    private
    def comment_params
        params.require(:comment).permit(:body, :video_id)
    end
end
