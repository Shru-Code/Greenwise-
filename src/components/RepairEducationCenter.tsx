import React, { useState, useEffect } from 'react';
import { FaTools, FaBook, FaVideo, FaPlay, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const RepairEducationCenter = () => {
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  const handleGuideClick = (guideId: number) => {
    setExpandedGuide(expandedGuide === guideId ? null : guideId);
    if (!loadedVideos.has(guideId)) {
      setLoadedVideos(prev => new Set([...prev, guideId]));
    }
  };

  const repairGuides = [
    {
      id: 1,
      title: "Kitchen Appliances Repair",
      category: "Appliances",
      icon: <FaTools className="w-8 h-8 text-blue-600" />,
      description: "Learn how to fix common kitchen appliances and extend their lifespan.",
      content: `Essential Kitchen Appliance Repairs:

1. Blender Repairs:
   • Check power cord and connections
   • Clean and maintain blades
   • Fix motor issues
   • Replace worn gaskets

2. Toaster Maintenance:
   • Clean heating elements
   • Fix stuck levers
   • Replace broken springs
   • Clean crumb tray

3. Mixer Troubleshooting:
   • Lubricate gears
   • Replace worn parts
   • Fix speed control
   • Clean and maintain attachments`,
      videoId: "4yJqzfcL6bI",
      videoTitle: "Kitchen Appliance Repair Guide"
    },
    {
      id: 2,
      title: "Clothes and Textiles Repair",
      category: "Textiles",
      icon: <FaTools className="w-8 h-8 text-green-600" />,
      description: "Master the art of mending clothes and textile items sustainably.",
      content: `Textile Repair Techniques:

1. Basic Stitches:
   • Running stitch
   • Backstitch
   • Whip stitch
   • Blanket stitch

2. Common Repairs:
   • Patching holes
   • Fixing seams
   • Replacing buttons
   • Mending tears

3. Advanced Techniques:
   • Darning socks
   • Invisible mending
   • Zipper replacement
   • Hem adjustments`,
      videoId: "u5EuSGABogw",
      videoTitle: "Clothing Repair Basics"
    },
    {
      id: 3,
      title: "Furniture Repair",
      category: "Furniture",
      icon: <FaTools className="w-8 h-8 text-amber-600" />,
      description: "Learn how to repair and maintain your furniture to extend its lifespan.",
      content: `Furniture Repair and Maintenance Guide:

1. Common Repairs:
   • Fixing wobbly legs
   • Repairing broken chair legs
   • Mending loose backrests
   • Fixing crooked footstools
   • Table repairs

2. Maintenance Tips:
   • Regular joint checking (1-2 times per year)
   • Proper screw tightening
   • Alternating chair usage
   • Material-specific care

3. Material-Specific Care:
   • Wood: Regular joint inspection and tightening
   • Leather: Use specialized repair kits
   • Fabric: Apply stain protection spray
   • Reed/Thatch: Regular moisture maintenance
   • Upholstery: Proper cleaning and maintenance

4. Essential Tools:
   • Two-component glue
   • Screwdrivers
   • Web stretcher
   • Staple gun
   • Basic hand tools`,
      videoId: "AdfhyZvVkio",
      videoTitle: "Furniture Repair Basics"
    },
    {
      id: 4,
      title: "Sewing Machine Repair",
      category: "Machines",
      icon: <FaTools className="w-8 h-8 text-yellow-600" />,
      description: "Keep your sewing machine running smoothly with these maintenance tips.",
      content: `Sewing Machine Care:

1. Regular Maintenance:
   • Cleaning procedures
   • Oiling points
   • Thread tension
   • Needle replacement

2. Common Issues:
   • Thread jams
   • Skipped stitches
   • Tension problems
   • Feed dog issues

3. Advanced Repairs:
   • Motor maintenance
   • Timing adjustment
   • Belt replacement
   • Circuit board fixes`,
      videoId: "x2brhyAUkT8",
      videoTitle: "Sewing Machine Maintenance"
    },
    {
      id: 5,
      title: "Toy Restoration",
      category: "Toys",
      icon: <FaTools className="w-8 h-8 text-purple-600" />,
      description: "Learn how to repair and restore your favorite toys to their former glory.",
      content: `Toy Repair and Restoration Guide:

1. Electric Toy Repairs:
   • Battery connection fixes
   • Motor maintenance
   • Circuit board repairs
   • Switch replacements

2. Plush Toy Repairs:
   • Seam mending
   • Stuffing replacement
   • Eye/nose reattachment
   • Surface cleaning

3. Plastic Toy Repairs:
   • Crack sealing
   • Part replacement
   • Paint touch-ups
   • Joint repairs

4. Safety Considerations:
   • Age-appropriate repairs
   • Non-toxic materials
   • Secure attachments
   • Regular maintenance

5. Essential Tools:
   • Fabric glue
   • Needle and thread
   • Small screwdrivers
   • Cleaning supplies
   • Replacement parts`,
      videoId: "IGfVtjxv2nA",
      videoTitle: "Toy Repair and Restoration"
    }
  ];

  const repairTips = [
    {
      id: 1,
      title: "Essential Tool Kit",
      description: "Basic tools needed for most repairs: screwdrivers, pliers, soldering iron, and cleaning supplies",
      icon: <FaTools className="w-6 h-6 text-gray-600" />,
      details: [
        "Quality screwdrivers (Phillips and flathead)",
        "Needle-nose pliers",
        "Wire cutters",
        "Soldering iron and solder",
        "Multimeter for electrical testing",
        "Cleaning supplies and lubricants"
      ]
    },
    {
      id: 2,
      title: "Safety Guidelines",
      description: "Always unplug devices, wear safety gear, and work in a well-ventilated area",
      icon: <FaBook className="w-6 h-6 text-gray-600" />,
      details: [
        "Wear appropriate safety gear (gloves, goggles)",
        "Work in a well-lit, ventilated space",
        "Keep a fire extinguisher nearby",
        "Use proper tools for each task",
        "Follow manufacturer guidelines",
        "Keep children and pets away from work area"
      ]
    },
    {
      id: 3,
      title: "Repair Resources",
      description: "Keep spare parts, repair manuals, and online resources handy",
      icon: <FaBook className="w-6 h-6 text-gray-600" />,
      details: [
        "Manufacturer's repair manuals",
        "Online repair communities",
        "Spare parts inventory",
        "Repair documentation",
        "Troubleshooting guides",
        "Expert consultation contacts"
      ]
    },
    {
      id: 4,
      title: "Common Repair Mistakes",
      description: "Learn to avoid common pitfalls in repair work",
      icon: <FaTools className="w-6 h-6 text-gray-600" />,
      details: [
        "Rushing through repairs",
        "Using wrong tools",
        "Ignoring safety protocols",
        "Skipping diagnostic steps",
        "Poor documentation",
        "Inadequate testing"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Repair Education Center</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive repair guides and tips to learn how to fix and maintain your items.
          </p>
        </motion.div>

        {/* Repair Guides Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Repair Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {guide.icon}
                    <span className="ml-2 text-sm font-medium text-gray-500">{guide.category}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{guide.title}</h4>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <button
                    onClick={() => handleGuideClick(guide.id)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
                  >
                    {expandedGuide === guide.id ? (
                      <>
                        <FaChevronUp className="w-4 h-4 mr-2" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <FaChevronDown className="w-4 h-4 mr-2" />
                        Show Details
                      </>
                    )}
                  </button>

                  {expandedGuide === guide.id && (
                    <div className="overflow-hidden transition-all duration-300">
                      <div className="prose max-w-none mb-4">
                        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                          {guide.content}
                        </pre>
                      </div>
                      {loadedVideos.has(guide.id) && (
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                          <iframe
                            src={`https://www.youtube.com/embed/${guide.videoId}`}
                            title={guide.videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Repair Tips Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Quick Repair Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairTips.map((tip) => (
              <div
                key={tip.id}
                className="flex flex-col p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mb-4">
                  {tip.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">{tip.title}</h4>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <ul className="space-y-2">
                    {tip.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-2 text-center">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/results?search_query=repair+tutorial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FaVideo className="w-5 h-5 mr-2" />
            Browse More Repair Tutorials
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RepairEducationCenter; 