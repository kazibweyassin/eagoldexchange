import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Video, 
  MoreVertical,
  Search,
  Users,
  Clock,
  CheckCheck,
  Paperclip,
  Smile,
  Shield,
  Star,
  Online
} from "lucide-react";

export function MessagingCenter() {
  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      {/* Left Sidebar - Conversations */}
      <div className="w-80 border-r bg-muted/30">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Messages</h3>
            <Button variant="ghost" size="sm">
              <Users className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>

        <div className="overflow-auto">
          {/* Active Conversations */}
          <div className="p-2 space-y-1">
            {/* Conversation 1 - Active */}
            <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg cursor-pointer">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/supplier1.jpg" />
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">Golden Horizons Mining</p>
                  <span className="text-xs text-muted-foreground">2m</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground truncate">
                    The 10oz shipment is ready for pickup...
                  </p>
                  <Badge variant="secondary" className="text-xs">2</Badge>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">Verified Supplier</span>
                </div>
              </div>
            </div>

            {/* Conversation 2 */}
            <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg cursor-pointer">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatars/buyer1.jpg" />
                  <AvatarFallback>IG</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">International Gold Corp</p>
                  <span className="text-xs text-muted-foreground">15m</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCheck className="h-3 w-3 text-blue-500" />
                  <p className="text-sm text-muted-foreground truncate">
                    Payment confirmed for the 5.5oz order
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-muted-foreground">5.0 rating</span>
                </div>
              </div>
            </div>

            {/* Conversation 3 */}
            <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg cursor-pointer">
              <Avatar className="h-10 w-10">
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">East Africa Exchange</p>
                  <span className="text-xs text-muted-foreground">1h</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  Your exchange request has been approved
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline" className="text-xs">Support</Badge>
                </div>
              </div>
            </div>

            {/* Conversation 4 */}
            <div className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg cursor-pointer">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">Artisan Miners Co-op</p>
                  <span className="text-xs text-muted-foreground">3h</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  We have new inventory available
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Active Conversation */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h4 className="font-medium">Golden Horizons Mining</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Online className="h-3 w-3 text-green-500" />
                <span>Online</span>
                <span>•</span>
                <Shield className="h-3 w-3 text-green-600" />
                <span>Verified Supplier</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {/* Message from supplier */}
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">GH</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-muted p-3 rounded-lg max-w-md">
                <p className="text-sm">
                  Hello! I wanted to update you on your recent order. The 10oz of 24K gold 
                  has been processed and is ready for pickup. All documentation is prepared.
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
            </div>
          </div>

          {/* Your reply */}
          <div className="flex items-start gap-3 justify-end">
            <div className="flex-1 flex justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-md">
                <p className="text-sm">
                  Great! Can you confirm the purity certificates are included? 
                  I'll arrange pickup for tomorrow morning.
                </p>
              </div>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">ME</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>10:32 AM</span>
              <CheckCheck className="h-3 w-3 text-blue-500" />
            </div>
          </div>

          {/* Supplier reply */}
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">GH</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-muted p-3 rounded-lg max-w-md">
                <p className="text-sm">
                  Yes, all certificates are ready including:
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Purity verification (99.99%)</li>
                  <li>• Source certification</li>
                  <li>• Weight verification</li>
                  <li>• Insurance documentation</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
            </div>
          </div>

          {/* Trade action card */}
          <div className="flex justify-center my-6">
            <Card className="w-full max-w-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium">Trade #GH-2024-001</h5>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span className="font-medium">10 oz 24K Gold</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="font-medium">$20,345</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-600">Ready for Pickup</span>
                  </div>
                </div>
                <Button className="w-full mt-4" size="sm">
                  View Trade Details
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* System message */}
          <div className="flex justify-center">
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-xs">
              <Shield className="h-3 w-3 inline mr-1" />
              This conversation is secured and monitored for your protection
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input 
                placeholder="Type your message..." 
                className="pr-20"
              />
              <Button variant="ghost" size="sm" className="absolute right-12 top-1/2 transform -translate-y-1/2">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <Button size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            All messages are encrypted and comply with financial regulations
          </p>
        </div>
      </div>
    </div>
  );
}
