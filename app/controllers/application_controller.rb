class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user
  
    def current_user 
      return nil unless session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def signed_in?
      !current_user.nil?
    end
    
    def sign_in!(user)
      session[:session_token] = user.reset_session_token!
    end
  
    def sign_out!
      current_user.reset_session_token! if signed_in?
      session[:session_token] = nil
    end
end
