Rails.application.routes.draw do
  resources :locations, defaults: {format: :json} do 
    resources :pois
    # resources :hours
  end
  # namespace :api, defaults: {format: :json} do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
