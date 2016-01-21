class SoundsController <ApplicationController
	before_action

	def index
		@user = User.find(session[:user_id])
	end

end
