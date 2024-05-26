import functions_framework

@functions_framework.http
def process_rewards(request):
        """HTTP Cloud Function to process rewards based on goal duration.
        Args:
            request (flask.Request): The request object.
            Returns:
                A JSON response with the reward."""
        request_json = request.get_json(silent=True)
        duration = request_json('duration')

        reward = determine_reward(duration)

        return {'reward': reward},200

def determine_reward(duration):
    if duration <= 30:
        return "Espresso"
    elif duration <= 60:
         return "Double Espresso"
    elif duration <= 90:
        return "Americano"
    elif duration <= 120:
        return "Latte"
    elif duration <= 150:
        return "Cappuccino"
    elif duration <= 180:
        return "Macchiato"
    else:
        return "Flat White"