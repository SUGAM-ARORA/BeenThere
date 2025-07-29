'use client';

import Link from 'next/link';
import {
  GraduationCap,
  Users,
  TrendingUp,
  BookOpen,
  Sparkles,
  Eye,
  LogIn,
  LogOut,
  User,
  Lightbulb,
  Menu,
  X,
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const navigationItems = [
    {
      href: '/',
      label: 'Companies',
      icon: TrendingUp,
      color:
        'from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20',
    },
    {
      href: '/insights',
      label: 'Insights',
      icon: Lightbulb,
      color:
        'from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20',
    },
    {
      href: '/resources',
      label: 'Resources',
      icon: BookOpen,
      color:
        'from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20',
    },
    {
      href: '/about',
      label: 'About',
      icon: Users,
      color:
        'from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20',
    },
  ];

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-3 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                BeenThere
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Learn from Those Who've Been There
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map(item => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <div
                    className={`p-1.5 rounded-lg bg-gradient-to-r ${item.color} transition-all duration-300`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Desktop Auth */}
            <div className="hidden lg:flex items-center gap-4">
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium">{user.name}</div>
                        <Badge
                          className={`text-xs ${
                            user.userType === 'admin'
                              ? 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400'
                              : user.userType === 'contributor'
                                ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300'
                          }`}
                        >
                          {user.userType === 'admin'
                            ? 'Admin'
                            : user.userType === 'contributor'
                              ? 'Contributor'
                              : 'Viewer'}
                        </Badge>
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600 dark:text-red-400"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/auth">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <User className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    BeenThere
                  </SheetTitle>
                  <SheetDescription>
                    Learn from those who've been there
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-8 space-y-6">
                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {navigationItems.map(item => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${item.color.replace('group-hover:', '')}`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Mobile Auth */}
                  <div className="border-t pt-6">
                    {isAuthenticated && user ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <Badge
                              className={`text-xs ${
                                user.userType === 'admin'
                                  ? 'bg-red-100 text-red-800'
                                  : user.userType === 'contributor'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {user.userType === 'admin'
                                ? 'Admin'
                                : user.userType === 'contributor'
                                  ? 'Contributor'
                                  : 'Viewer'}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          onClick={handleLogout}
                          variant="outline"
                          className="w-full text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    ) : (
                      <Link
                        href="/auth"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <User className="w-4 h-4 mr-2" />
                          Get Started
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
