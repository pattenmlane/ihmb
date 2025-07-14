'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Only needed if you want to use router.back() or similar

export default function SettingsPage() {
  const router = useRouter(); // Initialize router if needed

  // State for Profile Editing
  const [profileData, setProfileData] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // State for Account Management
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // State for Notifications
  const [notificationSettings, setNotificationSettings] = useState({
    newMatches: true,
    newMessages: true,
    emailNotifications: true,
  });

  // State for Security
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);


  // Simulate fetching all settings data on component mount
  useEffect(() => {
    // Simulate fetching profile data
    setProfileData({
      name: 'Emma',
      age: 26,
      bio: 'Enthusiastic traveler and aspiring chef. Looking for genuine connections and interesting conversations. Love exploring new places and trying new foods!',
      // Add other profile fields as needed (gender, status, preferences)
    });
    setLoadingProfile(false);

    // Simulate fetching account email
    setEmail('user@example.com');

    // Simulate fetching notification settings
    setNotificationSettings({
      newMatches: true,
      newMessages: true,
      emailNotifications: true,
    });

    // Simulate fetching security settings
    setTwoFactorEnabled(false); // Default 2FA to off for example
  }, []);

  // --- Profile Editing Handlers ---
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving profile changes:", profileData);
    // In a real app, send updated data to your API
    alert('Profile updated successfully!');
  };

  // --- Account Management Handlers ---
  const handleChangeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Changing email to:", email);
    // In a real app: API call to update email
    alert('Email change request sent!');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("New passwords don't match!");
      return;
    }
    console.log("Changing password for:", email, "New password:", newPassword);
    // In a real app: API call to change password
    alert('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Deleting account...");
      // In a real app: API call to delete account, then log out and redirect
      alert('Account deletion initiated.');
      router.push('/'); // Redirect to homepage after deletion
    }
  };

  // --- Notification Handlers ---
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }));
    console.log("Notification settings updated:", { ...notificationSettings, [name]: checked });
    // In a real app: send update to backend immediately or on save
  };

  // --- Security Handlers ---
  const handleToggleTwoFactor = () => {
    const newState = !twoFactorEnabled;
    setTwoFactorEnabled(newState);
    console.log(`Two-factor authentication ${newState ? 'enabled' : 'disabled'}`);
    // In a real app: Trigger 2FA setup flow or disable it via API
    alert(`Two-factor authentication ${newState ? 'enabled' : 'disabled'}!`);
  };

  if (loadingProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6"> {/* Increased max-w for more content */}
        <div className="flex items-center mb-8">
          <Link href="/browse" passHref>
            <button className="text-pink-600 text-2xl mr-4">&larr;</button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        </div>

        {/* --- Edit Profile Section --- */}
        <section className="mb-10 pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Edit Profile</h2>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={profileData.age}
                onChange={handleProfileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleProfileChange}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              ></textarea>
            </div>
            {/* Add more profile fields like gender, status, preferences if desired */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Save Profile
              </button>
            </div>
          </form>
        </section>

        {/* --- Account Management Section --- */}
        <section className="mb-10 pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account</h2>

          <h3 className="text-xl font-medium text-gray-900 mb-4">Change Email</h3>
          <form onSubmit={handleChangeEmail} className="space-y-4 mb-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Update Email
            </button>
          </form>

          <h3 className="text-xl font-medium text-gray-900 mb-4">Change Password</h3>
          <form onSubmit={handleChangePassword} className="space-y-4 mb-8">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                id="current-password"
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                id="new-password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                id="confirm-new-password"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Change Password
            </button>
          </form>

          <h3 className="text-xl font-medium text-gray-900 mb-4">Delete Account</h3>
          <p className="text-sm text-gray-600 mb-4">
            Permanently delete your account and all associated data. This action is irreversible.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete Account
          </button>
        </section>

        {/* --- Notification Settings Section --- */}
        <section className="mb-10 pb-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="newMatches" className="text-gray-700">New Matches</label>
              <input
                type="checkbox"
                id="newMatches"
                name="newMatches"
                checked={notificationSettings.newMatches}
                onChange={handleNotificationChange}
                className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="newMessages" className="text-gray-700">New Messages</label>
              <input
                type="checkbox"
                id="newMessages"
                name="newMessages"
                checked={notificationSettings.newMessages}
                onChange={handleNotificationChange}
                className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="emailNotifications" className="text-gray-700">Email Notifications</label>
              <input
                type="checkbox"
                id="emailNotifications"
                name="emailNotifications"
                checked={notificationSettings.emailNotifications}
                onChange={handleNotificationChange}
                className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
            </div>
          </div>
          {/* Note: No separate save button for notifications here,
                      as changes are immediately reflected in state and
                      could be sent to backend on change or on overall page save */}
        </section>

        {/* --- Security Settings Section --- */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Two-Factor Authentication (2FA)</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={handleToggleTwoFactor}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
              </label>
            </div>
            <p className="text-sm text-gray-500 -mt-2 mb-4">
              When enabled, you'll need to enter a code from your authenticator app or SMS to log in.
            </p>
          </div>
          {/* You could add a "Manage Devices" button here if desired, leading to a modal or another page */}
          <button
            onClick={() => alert('This would open a modal or dedicated page to manage connected devices.')}
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Manage Connected Devices
          </button>
        </section>

      </div>
    </div>
  );
}