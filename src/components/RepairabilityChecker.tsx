import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lightbulb, CheckCircle, XCircle, AlertCircle, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const itemCategories = [
  { value: "electronics", label: "Electronics & Appliances" },
  { value: "furniture", label: "Furniture & Woodwork" },
  { value: "clothing", label: "Clothing & Textiles" },
  { value: "bicycle", label: "Bicycles & Sports Equipment" },
  { value: "jewelry", label: "Jewelry & Accessories" },
  { value: "other", label: "Other" },
];

type ResultType = {
  repairability: 'high' | 'medium' | 'low' | null;
  message: string;
  tips: string[];
};

const RepairabilityChecker = () => {
  const { user } = useAuth();
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [issue, setIssue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultType | null>(null);

  const handleCheck = async () => {
    if (!itemName || !category || !issue) return;
    
    setLoading(true);
    
    try {
      // Simulate AI processing with pre-defined responses based on category
      let simulatedResult: ResultType;
      
      if (category === 'electronics') {
        simulatedResult = {
          repairability: 'medium',
          message: "Based on your description, this electronic item might be repairable. Many common electronic issues have straightforward fixes.",
          tips: [
            "Check for loose connections or damaged cables first",
            "Look for visible signs of component damage",
            "Small household appliances are often worth repairing",
            "Consider bringing this to our next Repair Cafe event"
          ]
        };
      } else if (category === 'furniture') {
        simulatedResult = {
          repairability: 'high',
          message: "Furniture items typically have high repairability! Wooden furniture especially can be restored even with significant damage.",
          tips: [
            "Wood glue and clamps can fix most loose joints",
            "Surface scratches can be treated with furniture polish or wax",
            "Broken wooden parts can often be replaced or reinforced",
            "Our furniture experts can help at the next Repair Cafe event"
          ]
        };
      } else if (category === 'clothing') {
        simulatedResult = {
          repairability: 'high',
          message: "Clothing and textiles are usually highly repairable with basic sewing skills.",
          tips: [
            "Tears can be patched or sewn closed",
            "Missing buttons can be easily replaced",
            "Consider creative visible mending as a design feature",
            "Our textile volunteers can teach you basic repair stitches"
          ]
        };
      } else {
        simulatedResult = {
          repairability: 'medium',
          message: "This item may be repairable, but we'd need to see it in person to make a better assessment.",
          tips: [
            "Take clear photos of the damage or issue",
            "Don't try to force broken parts together",
            "Keep all loose or detached pieces",
            "Bring it to our next event for a hands-on assessment"
          ]
        };
      }
      
      // Define the type for the Supabase insert payload
      interface RepairabilityAssessmentInsert {
        item_name: string;
        category: string;
        issue_description: string;
        repairability_score: string;
        ai_message: string;
        ai_tips: string[];
        user_id?: string; // user_id is optional and will only be included if available
      }

      // Ensure repairability_score is always a string
      const finalRepairabilityScore: string = simulatedResult.repairability || 'unknown';

      const assessmentData: RepairabilityAssessmentInsert = {
        item_name: itemName,
        category: category,
        issue_description: issue,
        repairability_score: finalRepairabilityScore,
        ai_message: simulatedResult.message,
        ai_tips: simulatedResult.tips,
      };

      // Conditionally add user_id if available
      if (user?.id) {
        assessmentData.user_id = user.id;
      }
      
      // Save assessment to database
      const { error } = await supabase
        .from('repairability_assessments')
        .insert(assessmentData);

      if (error) {
        console.error('Error saving assessment:', error);
      }

      setResult(simulatedResult);
    } catch (error) {
      console.error('Error processing assessment:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setItemName('');
    setCategory('');
    setIssue('');
    setResult(null);
  };

  return (
    <section id="repairability" className="section-padding bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-greenwise-800 mb-4">AI Repairability Checker</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Not sure if your item can be repaired? Our AI-powered tool will analyze your item and provide an instant assessment.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-greenwise-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b border-greenwise-100">
              <CardTitle className="flex items-center text-greenwise-800">
                <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
                Item Repairability Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {!result ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="item-name" className="text-gray-700">Item Name</Label>
                    <Input 
                      id="item-name" 
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="e.g., Table Lamp, Wooden Chair" 
                      className="border-greenwise-200 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-gray-700">Item Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="category" className="border-greenwise-200 focus:border-green-500">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {itemCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="issue" className="text-gray-700">Describe the Issue</Label>
                    <Textarea 
                      id="issue" 
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      placeholder="What's wrong with the item? How did it break? Any visible damage?" 
                      className="min-h-[120px] border-greenwise-200 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${
                    result.repairability === 'high' ? 'bg-green-50' :
                    result.repairability === 'medium' ? 'bg-amber-50' :
                    'bg-red-50'
                  }`}>
                    <div className="flex items-center">
                      <div className="mr-4">
                        {result.repairability === 'high' && <CheckCircle className="h-8 w-8 text-green-500" />}
                        {result.repairability === 'medium' && <AlertCircle className="h-8 w-8 text-amber-500" />}
                        {result.repairability === 'low' && <XCircle className="h-8 w-8 text-red-500" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {result.repairability === 'high' && "Highly Repairable"}
                          {result.repairability === 'medium' && "Potentially Repairable"}
                          {result.repairability === 'low' && "Challenging to Repair"}
                        </h3>
                        <p className="text-gray-700">{result.message}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-greenwise-100">
                    <h4 className="font-medium mb-3 text-greenwise-800">Repair Tips:</h4>
                    <ul className="space-y-3">
                      {result.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 flex-shrink-0 mr-3">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-greenwise-100">
                    <p className="text-sm text-gray-600 italic">
                      Note: This is an AI-assisted assessment based on limited information. For a definitive assessment, please bring your item to our next Repair Cafe event.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-green-50 to-green-100 border-t border-greenwise-100 flex justify-between">
              {!result ? (
                <Button 
                  onClick={handleCheck} 
                  disabled={!itemName || !category || !issue || loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </div>
                  ) : (
                    "Check Repairability"
                  )}
                </Button>
              ) : (
                <Button 
                  onClick={resetForm}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Check Another Item
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RepairabilityChecker;
