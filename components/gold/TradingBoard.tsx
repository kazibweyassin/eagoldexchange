"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Star, MessageSquare, Phone, CheckCircle, Clock, DollarSign, User, Bell } from "lucide-react";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import UserProfileModal from "@/components/auth/UserProfileModal";
import NotificationCenter, { useNotifications } from "@/components/notifications/NotificationCenter";

interface GoldListing {
  id: string;
  goldType: string;
  purity: number;
  quantity: number;
  pricePerOz: number;
  location: string;
  description: string;
  available: boolean;
  supplier: {
    name: string;
    trustScore: number;
    verified: boolean;
    location: string;
  };
  createdAt: string;
}

interface BuyerRequest {
  id: string;
  goldType: string;
  minPurity: number;
  maxPurity: number;
  quantity: number;
  maxPricePerOz: number;
  location: string;
  timeline: string;
  description: string;
  buyer: {
    name: string;
    trustScore: number;
    verified: boolean;
    location: string;
  };
  createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function TradingBoard() {
  const { data: session, status } = useSession();
  const { unreadCount } = useNotifications();
  const [activeTab, setActiveTab] = useState("listings");
  const [showListingForm, setShowListingForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Fetch gold listings
  const { data: listings, mutate: mutateListings } = useSWR<GoldListing[]>(
    "/api/gold-listings",
    fetcher
  );

  // Fetch buyer requests
  const { data: requests, mutate: mutateRequests } = useSWR<BuyerRequest[]>(
    "/api/buyer-requests",
    fetcher
  );

  const TrustScoreDisplay = ({ score }: { score: number }) => {
    const getColor = (score: number) => {
      if (score >= 80) return "bg-green-500";
      if (score >= 60) return "bg-yellow-500";
      return "bg-red-500";
    };

    return (
      <div className="flex items-center space-x-1">
        <Star className="h-4 w-4 text-yellow-500" />
        <span className="text-sm font-medium">{score}</span>
        <div className="w-16 h-2 bg-gray-200 rounded-full">
          <div
            className={`h-2 rounded-full ${getColor(score)}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    );
  };

  const ListingCard = ({ listing }: { listing: GoldListing }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{listing.goldType}</CardTitle>
            <CardDescription className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{listing.location}</span>
            </CardDescription>
          </div>
          <Badge variant={listing.available ? "default" : "secondary"}>
            {listing.available ? "Available" : "Sold"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <Label className="text-muted-foreground">Purity</Label>
            <p className="font-medium">{listing.purity}%</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Quantity</Label>
            <p className="font-medium">{listing.quantity} oz</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Price per oz</Label>
            <p className="font-medium text-green-600">${listing.pricePerOz}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Total Value</Label>
            <p className="font-medium">${(listing.quantity * listing.pricePerOz).toLocaleString()}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{listing.supplier.name}</span>
              {listing.supplier.verified && (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
            </div>
            <TrustScoreDisplay score={listing.supplier.trustScore} />
          </div>
          
          {listing.description && (
            <p className="text-sm text-muted-foreground mb-3">{listing.description}</p>
          )}

          <div className="flex space-x-2">
            <Button size="sm" className="flex-1" variant="gold">
              <MessageSquare className="size-4 mr-1" />
              Contact
            </Button>
            <Button size="sm" variant="goldOutline">
              <Phone className="size-4 mr-1" />
              Call
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const RequestCard = ({ request }: { request: BuyerRequest }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">Looking for {request.goldType}</CardTitle>
            <CardDescription className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{request.location}</span>
            </CardDescription>
          </div>
          <Badge variant="outline">
            <Clock className="h-3 w-3 mr-1" />
            {request.timeline}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <Label className="text-muted-foreground">Purity Range</Label>
            <p className="font-medium">{request.minPurity}% - {request.maxPurity}%</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Quantity Needed</Label>
            <p className="font-medium">{request.quantity} oz</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Max Price per oz</Label>
            <p className="font-medium text-green-600">${request.maxPricePerOz}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Budget</Label>
            <p className="font-medium">${(request.quantity * request.maxPricePerOz).toLocaleString()}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{request.buyer.name}</span>
              {request.buyer.verified && (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
            </div>
            <TrustScoreDisplay score={request.buyer.trustScore} />
          </div>
          
          {request.description && (
            <p className="text-sm text-muted-foreground mb-3">{request.description}</p>
          )}

          <div className="flex space-x-2">
            <Button size="sm" className="flex-1" variant="gold">
              <MessageSquare className="size-4 mr-1" />
              Contact Buyer
            </Button>
            <Button size="sm" variant="goldOutline">
              Submit Offer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header with Authentication and Notifications */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Trading Board</h1>
          <p className="text-muted-foreground">Connect suppliers with buyers in the gold market</p>
        </div>
        <div className="flex items-center space-x-3">
          {/* Authentication Section */}
          {session ? (
            <>
              {/* Notification Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowNotifications(true)}
                className="relative"
              >
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </Badge>
                )}
              </Button>

              {/* Profile Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowProfileModal(true)}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{session.user?.name?.split(' ')[0] || 'Profile'}</span>
              </Button>

              {/* Action Buttons */}
              <Dialog open={showListingForm} onOpenChange={setShowListingForm}>
                <DialogTrigger asChild>
                  <Button variant="gold" className="shadow-md">
                    <DollarSign className="size-4 mr-2" />
                    List Gold
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create Gold Listing</DialogTitle>
                    <DialogDescription>
                  List your gold for sale on the East African Gold Exchange marketplace.
                </DialogDescription>
              </DialogHeader>
              <SupplierListingForm 
                onClose={() => setShowListingForm(false)}
                onSuccess={() => {
                  mutateListings();
                  setShowListingForm(false);
                }}
              />
            </DialogContent>
          </Dialog>

          <Dialog open={showRequestForm} onOpenChange={setShowRequestForm}>
            <DialogTrigger asChild>
              <Button variant="goldOutline">Post Request</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Buyer Request</DialogTitle>
                <DialogDescription>
                  Post a request for the gold you want to purchase.
                </DialogDescription>
              </DialogHeader>
              <BuyerRequestForm 
                onClose={() => setShowRequestForm(false)}
                onSuccess={() => {
                  mutateRequests();
                  setShowRequestForm(false);
                }}
              />
            </DialogContent>
          </Dialog>
            </>
          ) : (
            /* Non-authenticated user */
            <Button onClick={() => signIn()}>
              Sign In to Trade
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="listings">Gold Listings ({listings?.length || 0})</TabsTrigger>
          <TabsTrigger value="requests">Buyer Requests ({requests?.length || 0})</TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings?.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            )) || (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">No gold listings available.</p>
                <Button className="mt-4" onClick={() => setShowListingForm(true)}>
                  Create First Listing
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requests?.map((request) => (
              <RequestCard key={request.id} request={request} />
            )) || (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">No buyer requests available.</p>
                <Button className="mt-4" onClick={() => setShowRequestForm(true)}>
                  Post First Request
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <UserProfileModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />
      
      <NotificationCenter 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
    </div>
  );
}

function SupplierListingForm({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    goldType: "",
    purity: "",
    quantity: "",
    pricePerOz: "",
    location: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.goldType || !formData.purity || !formData.quantity || !formData.pricePerOz || !formData.location) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Clean the form data before submission
    const cleanedData = {
      ...formData,
      description: formData.description.trim(),
      location: formData.location.trim(),
      purity: parseFloat(formData.purity),
      quantity: parseFloat(formData.quantity),
      pricePerOz: parseFloat(formData.pricePerOz)
    };
    
    try {
      // Submit to API
      const response = await fetch("/api/gold-listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log("Listing created successfully:", result);
        
        // Create notification for successful listing
        try {
          await fetch("/api/notifications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "NEW_LISTING",
              title: "Gold Listing Created",
              message: `Your ${cleanedData.goldType} listing (${cleanedData.quantity} oz) has been posted successfully.`,
              data: { listingId: result.listing?.id }
            }),
          });
        } catch (notifError) {
          console.log("Notification creation failed:", notifError);
        }
        
        // Reset form after successful submission
        setFormData({
          goldType: "",
          purity: "",
          quantity: "",
          pricePerOz: "",
          location: "",
          description: "",
        });
        
        // Refresh the listings data
        onSuccess();
        
        onClose();
      } else {
        throw new Error("Failed to create listing");
      }
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Failed to create listing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="goldType">Gold Type</Label>
          <Select value={formData.goldType} onValueChange={(value) => setFormData({ ...formData, goldType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="raw">Raw Gold</SelectItem>
              <SelectItem value="refined">Refined Gold</SelectItem>
              <SelectItem value="dust">Gold Dust</SelectItem>
              <SelectItem value="nuggets">Gold Nuggets</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="purity">Purity (%)</Label>
          <Input
            id="purity"
            type="number"
            value={formData.purity}
            onChange={(e) => setFormData({ ...formData, purity: e.target.value })}
            placeholder="99.9"
            min="1"
            max="100"
            step="0.1"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity (oz)</Label>
          <Input
            id="quantity"
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="100"
            min="0.1"
            step="0.1"
            autoComplete="off"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pricePerOz">Price per oz (USD)</Label>
          <Input
            id="pricePerOz"
            type="number"
            value={formData.pricePerOz}
            onChange={(e) => setFormData({ ...formData, pricePerOz: e.target.value })}
            placeholder="2000"
            min="1"
            step="0.01"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="City, Country (e.g., Kampala, Uganda)"
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe your gold's origin, quality certificates, or any special features..."
          rows={3}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Listing"}
        </Button>
      </div>
    </form>
  );
}

function BuyerRequestForm({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    goldType: "",
    minPurity: "",
    maxPurity: "",
    quantity: "",
    maxPricePerOz: "",
    location: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.goldType || !formData.minPurity || !formData.maxPurity || !formData.quantity || !formData.maxPricePerOz || !formData.location || !formData.timeline) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Clean the form data before submission
    const cleanedData = {
      ...formData,
      description: formData.description.trim(),
      location: formData.location.trim(),
      minPurity: parseFloat(formData.minPurity),
      maxPurity: parseFloat(formData.maxPurity),
      quantity: parseFloat(formData.quantity),
      maxPricePerOz: parseFloat(formData.maxPricePerOz)
    };
    
    try {
      // Submit to API
      const response = await fetch("/api/buyer-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log("Request created successfully:", result);
        
        // Create notification for successful request
        try {
          await fetch("/api/notifications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "NEW_LISTING",
              title: "Buyer Request Created",
              message: `Your request for ${cleanedData.goldType} (${cleanedData.quantity} oz) has been posted successfully.`,
              data: { requestId: result.request?.id }
            }),
          });
        } catch (notifError) {
          console.log("Notification creation failed:", notifError);
        }
        
        // Reset form after successful submission
        setFormData({
          goldType: "",
          minPurity: "",
          maxPurity: "",
          quantity: "",
          maxPricePerOz: "",
          location: "",
          timeline: "",
          description: "",
        });
        
        // Refresh the requests data
        onSuccess();
        
        onClose();
      } else {
        throw new Error("Failed to create request");
      }
    } catch (error) {
      console.error("Error creating request:", error);
      alert("Failed to create request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="goldType">Gold Type</Label>
          <Select value={formData.goldType} onValueChange={(value) => setFormData({ ...formData, goldType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="raw">Raw Gold</SelectItem>
              <SelectItem value="refined">Refined Gold</SelectItem>
              <SelectItem value="dust">Gold Dust</SelectItem>
              <SelectItem value="nuggets">Gold Nuggets</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">Urgent (1-3 days)</SelectItem>
              <SelectItem value="week">Within a week</SelectItem>
              <SelectItem value="month">Within a month</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="minPurity">Min Purity (%)</Label>
          <Input
            id="minPurity"
            type="number"
            value={formData.minPurity}
            onChange={(e) => setFormData({ ...formData, minPurity: e.target.value })}
            placeholder="95"
            min="1"
            max="100"
            step="0.1"
            autoComplete="off"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="maxPurity">Max Purity (%)</Label>
          <Input
            id="maxPurity"
            type="number"
            value={formData.maxPurity}
            onChange={(e) => setFormData({ ...formData, maxPurity: e.target.value })}
            placeholder="99.9"
            min="1"
            max="100"
            step="0.1"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity Needed (oz)</Label>
          <Input
            id="quantity"
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder="100"
            min="0.1"
            step="0.1"
            autoComplete="off"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="maxPricePerOz">Max Price per oz (USD)</Label>
          <Input
            id="maxPricePerOz"
            type="number"
            value={formData.maxPricePerOz}
            onChange={(e) => setFormData({ ...formData, maxPricePerOz: e.target.value })}
            placeholder="2000"
            min="1"
            step="0.01"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Preferred Location</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="City, Country or region"
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Additional Requirements</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Specific requirements, certifications needed, etc..."
          rows={3}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Post Request"}
        </Button>
      </div>
    </form>
  );
}
