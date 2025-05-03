import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Placeholder for chart component
const LineChart = ({ data, labels }) => (
  <View style={styles.chartPlaceholder}>
    <Text style={styles.chartPlaceholderText}>Portfolio Performance Chart</Text>
  </View>
);

// Market item component
const MarketItem = ({ name, value, change, isPositive }) => (
  <View style={styles.marketItem}>
    <Text style={styles.marketItemName}>{name}</Text>
    <View>
      <Text style={styles.marketItemValue}>${value}</Text>
      <Text
        style={[
          styles.marketItemChange,
          isPositive ? styles.positiveChange : styles.negativeChange,
        ]}
      >
        {isPositive ? '+' : ''}{change}%
      </Text>
    </View>
  </View>
);

// Recommendation card component
const RecommendationCard = ({ title, description, actionText }) => (
  <View style={styles.recommendationCard}>
    <Text style={styles.recommendationTitle}>{title}</Text>
    <Text style={styles.recommendationDescription}>{description}</Text>
    <TouchableOpacity style={styles.recommendationButton}>
      <Text style={styles.recommendationButtonText}>{actionText}</Text>
    </TouchableOpacity>
  </View>
);

// Main DashboardScreen component
const DashboardScreen = () => {
  // Sample data (would be fetched from API)
  const portfolioValue = 12458.92;
  const portfolioChange = 3.2;
  const isPortfolioPositive = portfolioChange > 0;

  const marketData = [
    { id: '1', name: 'S&P 500', value: '4,732.58', change: 0.8, isPositive: true },
    { id: '2', name: 'Bitcoin', value: '36,789.21', change: -2.1, isPositive: false },
    { id: '3', name: 'Ethereum', value: '2,456.78', change: 1.5, isPositive: true },
    { id: '4', name: 'Gold', value: '1,876.45', change: 0.3, isPositive: true },
  ];

  const recommendations = [
    {
      id: '1',
      title: 'Diversify Your Portfolio',
      description: 'Your tech allocation is high at 65%. Consider adding more defensive sectors for balance.',
      actionText: 'View Suggestions',
    },
    {
      id: '2',
      title: 'Emergency Fund Alert',
      description: 'Your emergency fund covers 2 months of expenses. Aim for 6 months for better security.',
      actionText: 'Build Emergency Fund',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.username}>Alex</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          {/* Notification icon would go here */}
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.portfolioCard}>
          <Text style={styles.portfolioLabel}>Total Portfolio Value</Text>
          <Text style={styles.portfolioValue}>${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
          <View style={styles.portfolioChangeContainer}>
            <Text
              style={[
                styles.portfolioChange,
                isPortfolioPositive ? styles.positiveChange : styles.negativeChange,
              ]}
            >
              {isPortfolioPositive ? '+' : ''}{portfolioChange}%
            </Text>
            <Text style={styles.portfolioPeriod}>this month</Text>
          </View>

          <LineChart
            data={[5000, 5200, 5700, 5300, 5900, 6200, 6000, 6500, 7000, 7200, 7500, 7800]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          />

          <View style={styles.portfolioActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.primaryActionButton]}>
              <Text style={styles.primaryActionButtonText}>Invest</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Market Trends</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marketList}>
            {marketData.map((item) => (
              <MarketItem
                key={item.id}
                name={item.name}
                value={item.value}
                change={item.change}
                isPositive={item.isPositive}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Smart Recommendations</Text>
          </View>

          {recommendations.map((item) => (
            <RecommendationCard
              key={item.id}
              title={item.title}
              description={item.description}
              actionText={item.actionText}
            />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Financial Health Score</Text>
          </View>

          <View style={styles.healthScoreCard}>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreText}>78</Text>
            </View>
            <Text style={styles.scoreLabel}>Good</Text>
            <Text style={styles.scoreDescription}>
              Your financial health is good, but there's room for improvement in your debt-to-income ratio.
            </Text>
            <TouchableOpacity style={styles.scoreButton}>
              <Text style={styles.scoreButtonText}>Improve Your Score</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  greeting: {
    fontSize: 14,
    color: '#6B7280',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  scrollView: {
    flex: 1,
  },
  portfolioCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  portfolioLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  portfolioValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 4,
  },
  portfolioChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  portfolioChange: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
  },
  portfolioPeriod: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  chartPlaceholder: {
    height: 150,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  portfolioActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#4B5563',
    fontWeight: '600',
  },
  primaryActionButton: {
    backgroundColor: '#4F46E5',
  },
  primaryActionButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  seeAllText: {
    fontSize: 14,
    color: '#4F46E5',
  },
  marketList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  marketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  marketItemName: {
    fontSize: 16,
    color: '#1F2937',
  },
  marketItemValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'right',
  },
  marketItemChange: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
  },
  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 4,
    marginBottom: 12,
  },
  recommendationButton: {
    backgroundColor: '#EEF2FF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  recommendationButtonText: {
    color: '#4F46E5',
    fontWeight: '600',
    fontSize: 14,
  },
  healthScoreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  scoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  scoreDescription: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 16,
  },
  scoreButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  scoreButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default DashboardScreen;