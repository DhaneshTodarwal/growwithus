'use client';

import { useState } from 'react';
import { Sparkles, MessageSquare, BarChart3, Wand2 } from 'lucide-react';

export default function AIDemosPage() {
  // Content Generator State
  const [contentType, setContentType] = useState('blog');
  const [contentTopic, setContentTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [contentLoading, setContentLoading] = useState(false);

  // Sentiment Analysis State
  const [sentimentText, setSentimentText] = useState('');
  const [sentimentResult, setSentimentResult] = useState<{
    sentiment: string;
    score: number;
    confidence: number;
  } | null>(null);
  const [sentimentLoading, setSentimentLoading] = useState(false);

  // Enhanced Chatbot State
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; message: string }>>([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Content Generator Handler
  const handleContentGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contentTopic.trim()) return;

    setContentLoading(true);
    setTimeout(() => {
      const templates: Record<string, string> = {
        blog: `# ${contentTopic}\n\nIn today's digital landscape, ${contentTopic.toLowerCase()} has become increasingly important. Here are the key insights:\n\n## Key Points\n- Understanding the fundamentals\n- Best practices and strategies\n- Future trends and innovations\n\n## Conclusion\nBy implementing these strategies, you can achieve remarkable results in ${contentTopic.toLowerCase()}.`,
        social: `🚀 Exciting news about ${contentTopic}!\n\n✨ Here's what you need to know:\n• Game-changing insights\n• Proven strategies\n• Expert tips\n\n💡 Ready to take action? Let's dive in!\n\n#${contentTopic.replace(/\s+/g, '')} #Innovation #Success`,
        email: `Subject: Discover the Power of ${contentTopic}\n\nDear Valued Customer,\n\nWe're excited to share insights about ${contentTopic} that can transform your business.\n\n🎯 What's Inside:\n- Actionable strategies\n- Real-world examples\n- Expert recommendations\n\nLet's connect and explore how ${contentTopic} can benefit you.\n\nBest regards,\nYour Growth Partner`,
        product: `${contentTopic} - Premium Solution\n\n✨ Features:\n• Advanced functionality\n• User-friendly interface\n• 24/7 support included\n\n🎁 Special Benefits:\n- Boost productivity by 50%\n- Save time and resources\n- Proven ROI within 3 months\n\n💰 Investment: Contact us for pricing\n🚀 Get started today!`
      };
      setGeneratedContent(templates[contentType] || templates.blog);
      setContentLoading(false);
    }, 1500);
  };

  // Sentiment Analysis Handler
  const handleSentimentAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sentimentText.trim()) return;

    setSentimentLoading(true);
    setTimeout(() => {
      // Simple sentiment analysis simulation
      const positiveWords = ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'perfect', 'best', 'awesome', 'good'];
      const negativeWords = ['bad', 'terrible', 'awful', 'worst', 'hate', 'horrible', 'poor', 'disappointing', 'useless', 'waste'];
      
      const text = sentimentText.toLowerCase();
      let positiveCount = 0;
      let negativeCount = 0;
      
      positiveWords.forEach(word => {
        if (text.includes(word)) positiveCount++;
      });
      
      negativeWords.forEach(word => {
        if (text.includes(word)) negativeCount++;
      });
      
      const totalWords = text.split(/\s+/).length;
      let sentiment = 'Neutral';
      let score = 0;
      
      if (positiveCount > negativeCount) {
        sentiment = 'Positive';
        score = Math.min((positiveCount / totalWords) * 100, 95);
      } else if (negativeCount > positiveCount) {
        sentiment = 'Negative';
        score = Math.min((negativeCount / totalWords) * 100, 95);
      } else {
        score = 50;
      }
      
      const confidence = Math.min(70 + Math.random() * 25, 95);
      
      setSentimentResult({
        sentiment,
        score: Math.round(score),
        confidence: Math.round(confidence)
      });
      setSentimentLoading(false);
    }, 1000);
  };

  // Enhanced Chatbot Handler
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', message: userMessage }]);
    setChatInput('');
    setChatLoading(true);

    setTimeout(() => {
      // Intelligent response generation
      const responses: Record<string, string> = {
        hello: "Hello! 👋 I'm your AI assistant. I can help you with information about AI services, web development, or answer general questions. What would you like to know?",
        services: "We offer a wide range of AI services including:\n• Custom AI Solutions\n• Machine Learning Models\n• Natural Language Processing\n• Computer Vision\n• Chatbot Development\n• Predictive Analytics\n\nWhich service interests you most?",
        pricing: "Our pricing is flexible and based on project scope. We offer:\n• Custom AI Solutions: Starting at ₹8 Lakh+\n• Enterprise Packages: Starting at ₹20 Lakh+\n\nWould you like to discuss your specific requirements?",
        ai: "AI (Artificial Intelligence) can revolutionize your business by:\n✨ Automating repetitive tasks\n📊 Providing data-driven insights\n🎯 Personalizing customer experiences\n⚡ Improving efficiency and accuracy\n\nHow can AI help your business?",
        default: `I understand you're asking about "${userMessage}". That's a great question! Our AI solutions can help address various business challenges. Would you like to:\n\n• Learn more about our services\n• Schedule a consultation\n• Explore specific AI capabilities\n\nWhat would be most helpful for you?`
      };

      const lowerMessage = userMessage.toLowerCase();
      let aiResponse = responses.default;

      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        aiResponse = responses.hello;
      } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
        aiResponse = responses.services;
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
        aiResponse = responses.pricing;
      } else if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
        aiResponse = responses.ai;
      }

      setChatMessages(prev => [...prev, { role: 'ai', message: aiResponse }]);
      setChatLoading(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Interactive AI Demos</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience AI in Action
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Try our cutting-edge AI tools and see how they can transform your business operations
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Demo 1: AI Content Generator */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  AI Content Generator
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Generate professional content instantly</p>
              </div>
            </div>
            
            <form onSubmit={handleContentGenerate} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Content Type
                  </label>
                  <select
                    id="contentType"
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="blog">Blog Post</option>
                    <option value="social">Social Media Post</option>
                    <option value="email">Email Campaign</option>
                    <option value="product">Product Description</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contentTopic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Topic/Keyword
                  </label>
                  <input
                    type="text"
                    id="contentTopic"
                    value={contentTopic}
                    onChange={(e) => setContentTopic(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Digital Marketing"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={contentLoading || !contentTopic.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
              >
                {contentLoading ? 'Generating Content...' : 'Generate Content'}
              </button>
            </form>

            {generatedContent && (
              <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Generated Content:
                </h3>
                <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans text-sm leading-relaxed">{generatedContent}</pre>
              </div>
            )}
          </div>

          {/* Demo 2: Sentiment Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Sentiment Analysis
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Analyze emotions and opinions in text</p>
              </div>
            </div>
            
            <form onSubmit={handleSentimentAnalyze} className="space-y-4">
              <div>
                <label htmlFor="sentimentText" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter text to analyze:
                </label>
                <textarea
                  id="sentimentText"
                  value={sentimentText}
                  onChange={(e) => setSentimentText(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Paste customer review, social media comment, or any text..."
                />
              </div>
              <button
                type="submit"
                disabled={sentimentLoading || !sentimentText.trim()}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
              >
                {sentimentLoading ? 'Analyzing...' : 'Analyze Sentiment'}
              </button>
            </form>

            {sentimentResult && (
              <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-700 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Analysis Results:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Sentiment</div>
                    <div className={`text-2xl font-bold ${
                      sentimentResult.sentiment === 'Positive' ? 'text-green-600' :
                      sentimentResult.sentiment === 'Negative' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {sentimentResult.sentiment}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Score</div>
                    <div className="text-2xl font-bold text-blue-600">{sentimentResult.score}%</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Confidence</div>
                    <div className="text-2xl font-bold text-purple-600">{sentimentResult.confidence}%</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Demo 3: Enhanced AI Chatbot */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Enhanced AI Chatbot
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Intelligent conversational AI assistant</p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4 h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
              {chatMessages.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Start a conversation! Try asking about our services, pricing, or AI capabilities.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-lg ${
                          msg.role === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="text-xs mb-1 opacity-70">
                          {msg.role === 'user' ? 'You' : 'AI Assistant'}
                        </div>
                        <div className="whitespace-pre-wrap">{msg.message}</div>
                      </div>
                    </div>
                  ))}
                  {chatLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message..."
                disabled={chatLoading}
              />
              <button
                type="submit"
                disabled={chatLoading || !chatInput.trim()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Integrate AI into Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can build custom AI solutions tailored to your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}
