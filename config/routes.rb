Rails.application.routes.draw do
  get 'users', to: 'users#index'
  get '/authorized_user', to: 'users#index'
  get 'stock', to: 'stocks#show'
  get 'ticker', to: 'stocks#get_ticker'

  patch 'watchlist', to: 'watch_lists#add_to_watch_list'

  resources :stocks, only: [:index]
  resources :users, only: [:create, :update, :destroy]

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
