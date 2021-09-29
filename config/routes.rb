Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show, :update, :destroy] do
      resources :videos, only: [:create, :update, :destroy]
    end
    
    resources :videos, only: [:index, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  resources :videos, only: [:show]
end
