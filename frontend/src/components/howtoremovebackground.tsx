// components/HowToRemoveBackground.tsx
export default function HowToRemoveBackground() {
    const steps = [
        {
            title: "Select an image",
            step: "Step 1",
            description: `First, choose the image you want to remove background from by clicking on “Upload a photo”.
  Your image format can be PNG or JPG.
  We support all image dimensions.`,
        },
        {
            title: "Let magic remove the background",
            step: "Step 2",
            description: `Our tool automatically removes the background from your image.`,
        },
        {
            title: "Download your image",
            step: "Step 3",
            description: `You can download your photo and you’re done!`,
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">How to remove a background in seconds?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-6 text-left shadow-sm"
                        >
                            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block mb-4">
                                {step.step}
                            </span>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
