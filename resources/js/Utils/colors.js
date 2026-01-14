/**
 * Fagnus Brand Color System
 * Centralized color configuration for consistent usage across the application
 */

export const Colors = {
  primary: '#EB5326',
  primaryDark: '#C1431F',
  primaryLight: '#F69682',
  
  secondary: '#1E293B',
  secondaryDark: '#0F172A',
  secondaryLight: '#334155',
  
  accent: '#F5A623',
  accentDark: '#D4881C',
  accentLight: '#FFBE4D',
  
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  
  neutral: {
    100: '#F8FAFC',
    200: '#F1F5F9',
    300: '#E2E8F0',
    400: '#CBD5E1',
    500: '#94A3B8',
    600: '#64748B',
    700: '#475569',
    800: '#334155',
    900: '#1E293B',
  }
};

// Helper functions for easier color access
export const getColor = (colorName, shade = null) => {
  if (shade && Colors[colorName] && typeof Colors[colorName] === 'object') {
    return Colors[colorName][shade] || Colors[colorName].DEFAULT || Colors[colorName];
  }
  return Colors[colorName] || '#000000';
};

// Note: These are kept for backward compatibility
// Actual Tailwind classes use the flattened structure from tailwind.config.js
export const brandColors = {
  primary: '#EB5326',
  'primary-dark': '#C1431F',
  'primary-light': '#F69682',
  secondary: '#1E293B',
  'secondary-dark': '#0F172A',
  'secondary-light': '#334155',
  accent: '#F5A623',
  'accent-dark': '#D4881C',
  'accent-light': '#FFBE4D',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  'neutral-100': '#F8FAFC',
  'neutral-200': '#F1F5F9',
  'neutral-300': '#E2E8F0',
  'neutral-400': '#CBD5E1',
  'neutral-500': '#94A3B8',
  'neutral-600': '#64748B',
  'neutral-700': '#475569',
  'neutral-800': '#334155',
  'neutral-900': '#1E293B',
};

// Export for direct Tailwind usage
export default Colors;