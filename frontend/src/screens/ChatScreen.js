import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Message component for chat bubbles
const Message = ({ message, isUser }) => {
  return (
    <View
      style={[
        styles.messageBubble,
        isUser ? styles.userBubble : styles.aiBubble,
      ]}
    >
      <Text style={[styles.messageText, isUser ? styles.userText : styles.aiText]}>
        {message.text}
      </Text>
      {message.timestamp && (
        <Text style={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      )}
    </View>
  );
};

// Main ChatScreen component
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef(null);

  // Sample initial messages
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: 'Hello! I\'m your InversAI assistant. How can I help with your financial questions today?',
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messages.length > 0 && flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // Handle sending a message
  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response (would be replaced with actual API call)
    setTimeout(() => {
      const aiResponses = [
        'Based on your investment profile, I recommend allocating 60% to index funds, 30% to bonds, and 10% to cryptocurrencies.',
        'The current market volatility suggests caution. Consider holding cash reserves of at least 3 months of expenses.',
        'Your savings rate is excellent! You\'re on track to reach financial independence in approximately 15 years.',
        'Bitcoin has shown increased volatility lately. If you\'re interested in crypto, consider dollar-cost averaging rather than lump-sum investing.',
        'Have you considered setting up an emergency fund? I recommend saving 3-6 months of expenses in a high-yield savings account.',
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>InversAI Assistant</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message message={item} isUser={item.isUser} />}
        contentContainerStyle={styles.messageList}
      />

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#4F46E5" />
          <Text style={styles.loadingText}>InversAI is thinking...</Text>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask about investments, savings, or financial advice..."
            placeholderTextColor="#9CA3AF"
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 16,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  messageList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
  },
  userBubble: {
    backgroundColor: '#4F46E5',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#FFFFFF',
  },
  aiText: {
    color: '#1F2937',
  },
  timestamp: {
    fontSize: 10,
    color: '#9CA3AF',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: '#4F46E5',
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ChatScreen;