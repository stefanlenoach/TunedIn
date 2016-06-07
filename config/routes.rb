Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :experiences
    resources :educations
    resources :connections, only: [:create, :destroy, :update, :show]
  end

  root "static_pages#root"
end
