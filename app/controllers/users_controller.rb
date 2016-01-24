class UsersController <ApplicationController

def new
	@user = User.new 
end

def create
	@user = User.create({first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation]}) 

	redirect_to root_path
end

end
