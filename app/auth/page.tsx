'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus, Users, UserCheck, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Join BeenThere
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Choose how you want to be part of our community. Whether
              you&#39;re here to learn or share, we have the perfect account
              type for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Sign In Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border border-white/30 dark:border-slate-600/30">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <LogIn className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                  Sign In
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-300">
                  Already have an account? Welcome back!
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Access all experiences and insights
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Participate in discussions
                    </span>
                  </div>
                </div>

                <Link href="/auth/login">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg py-6">
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign In to Your Account
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Sign Up Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white/90 to-white/70 dark:from-slate-800/90 dark:to-slate-700/70 backdrop-blur-sm border border-white/30 dark:border-slate-600/30">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <UserPlus className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                  Create Account
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-300">
                  New to BeenThere? Join our community!
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Browse experiences as a Viewer
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-lg">
                    <UserCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Share insights as a Contributor
                    </span>
                  </div>
                </div>

                <Link href="/auth/signup">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg py-6">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Create New Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Account Types Explanation */}
          <div className="bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-900/80 dark:to-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/30 dark:border-slate-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Choose Your Account Type
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50/80 to-blue-100/60 dark:from-blue-900/40 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Viewer Account
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Browse all company experiences and insights</li>
                  <li>• Ask questions in comment sections</li>
                  <li>• Access learning resources and guides</li>
                  <li>• Perfect for students seeking guidance</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-50/80 to-emerald-100/60 dark:from-emerald-900/40 dark:to-emerald-800/30 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Contributor Account
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Share your interview experiences</li>
                  <li>• Write general career insights</li>
                  <li>• Help guide the next generation</li>
                  <li>• Perfect for experienced professionals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-8 p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-700/50 text-center">
            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium mb-2">
              Demo Credentials Available:
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              Admin: admin@beenthere.com / admin123
              <br />
              Any other email works for demo purposes
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
