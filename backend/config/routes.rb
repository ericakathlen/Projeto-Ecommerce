Rails.application.routes.draw do

  devise_for :users
  
  # Teste Views
  resources :item_carrinho, only:[:create, :update, :destroy]
  resources :carrinho, only:[:show]
  resources :favorito, only:[:index, :create, :destroy]
  
  # publico
  namespace :api do
    namespace :v1 do
      resources :albums, only: [:index, :show] do
        collection do
          get :search
        end
      end
      resources :artists, only: [:index, :show]
      resources :carrinho, only: [:show]
      resources :item_carrinho, only: [:create, :update, :destroy]
      resources :favorito, only: [:index, :create, :destroy]
    end
  end

  # admin
  namespace :admin do
    resources :albums
    resources :artist
  end


  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
