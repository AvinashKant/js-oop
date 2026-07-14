from datetime import datetime

# Store basic context
user_name = None

print("🤖 ChatBot: Hello! I am a Rule-Based Chatbot.")
print("Type 'bye' to exit.\n")

while True:
    # Get input, trim spaces, and make it lowercase for easy matching
    user_input = input("You: ").strip().lower()

    # ---------------- Farewell & Exit ----------------
    if user_input in ["bye", "goodbye", "exit", "quit"]:
        if user_name:
            print(f"Bot: Goodbye, {user_name}! Have a nice day.")
        else:
            print("Bot: Goodbye! Have a nice day.")
        break

    # ---------------- Greetings ----------------
    elif any(greet in user_input for greet in ["hi", "hello", "hey", "good morning"]):
        if user_name:
            print(f"Bot: Hello again, {user_name}! How can I help you?")
        else:
            print("Bot: Hello! What's your name?")

    # ---------------- Name ----------------
    elif "my name is" in user_input:
        # Split the text at "my name is" and grab whatever is left
        raw_name = user_input.split("my name is")[-1].strip()
        user_name = raw_name.title()  # Capitalize the first letter
        print(f"Bot: Nice to meet you, {user_name}!")

    # ---------------- Questions & Features ----------------
    elif "how are you" in user_input:
        print("Bot: I'm doing great! Thanks for asking.")

    elif "what is your name" in user_input:
        print("Bot: My name is RuleBot.")

    elif "what can you do" in user_input:
        print("Bot: I can respond to greetings, simple questions, and remember your name.")

    elif "time" in user_input:
        print("Bot: Current time is", datetime.now().strftime("%H:%M:%S"))

    # ---------------- Context Awareness ----------------
    elif "remember me" in user_input:
        if user_name:
            print(f"Bot: Yes! Your name is {user_name}.")
        else:
            print("Bot: I don't know your name yet.")

    # ---------------- Unknown ----------------
    else:
        print("Bot: Sorry, I don't understand that. Please ask something else.")