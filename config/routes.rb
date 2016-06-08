Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :experiences
    resources :educations
    resources :posts
    resources :connections, only: [:index, :create, :destroy, :update, :show]
  end

  get '/auth/:provider/callback', to: 'api/sessions#omni_create'
  root "static_pages#root"
end
