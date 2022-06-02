class User < ApplicationRecord
    has_secure_password
    # belong_to :watch_list
end
