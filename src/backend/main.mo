import Text "mo:core/Text";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  type SuggestionSubmission = {
    name : Text;
    email : Text;
    appIdea : Text;
  };

  module ContactSubmission {
    public func compare(submission1 : ContactSubmission, submission2 : ContactSubmission) : Order.Order {
      switch (Text.compare(submission1.name, submission2.name)) {
        case (#equal) { Text.compare(submission1.email, submission2.email) };
        case (order) { order };
      };
    };
  };

  module SuggestionSubmission {
    public func compare(submission1 : SuggestionSubmission, submission2 : SuggestionSubmission) : Order.Order {
      switch (Text.compare(submission1.name, submission2.name)) {
        case (#equal) { Text.compare(submission1.email, submission2.email) };
        case (order) { order };
      };
    };
  };

  let contacts = Map.empty<Text, ContactSubmission>();
  let suggestions = Map.empty<Text, SuggestionSubmission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = { name; email; message };
    contacts.add(name, submission);
  };

  public shared ({ caller }) func submitSuggestion(name : Text, email : Text, appIdea : Text) : async () {
    let submission : SuggestionSubmission = { name; email; appIdea };
    suggestions.add(name, submission);
  };

  public query ({ caller }) func getAllContacts() : async [ContactSubmission] {
    contacts.values().toArray().sort();
  };

  public query ({ caller }) func getAllSuggestions() : async [SuggestionSubmission] {
    suggestions.values().toArray().sort();
  };
};
