import React from 'react';

function ChatPreview({ data }) {
  return (
    <div className="space-y-4">
      {data.messages.map((message, index) => (
        <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
          <div className={`rounded-lg p-4 max-w-[80%] ${
            message.isUser ? 'bg-blue-50' : 'bg-gray-50'
          }`}>
            <p className="text-sm text-gray-500 mb-1">
              {message.isUser ? 'You' : message.sender}
            </p>
            <p className="text-gray-900">{message.content}</p>
            <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmailPreview({ data }) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div>
        <p className="text-sm text-gray-500">From</p>
        <p className="font-medium">{data.sender}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Subject</p>
        <p className="font-medium">{data.subject}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Content</p>
        <div className="mt-2 prose max-w-none">
          {data.content}
        </div>
      </div>
    </div>
  );
}

function URLPreview({ data }) {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-6">
        <p className="text-sm text-gray-500 mb-2">Domain</p>
        <div className="flex items-center space-x-2">
          <span className="text-xl">🌐</span>
          <a 
            href={data.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            {data.url}
          </a>
        </div>
      </div>
      {data.screenshot && (
        <div>
          <p className="text-sm text-gray-500 mb-2">Preview</p>
          <div className="border rounded-lg overflow-hidden">
            <img 
              src={data.screenshot} 
              alt="Website preview" 
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function MediaPreview({ data }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Media Preview</p>
      <div className="border rounded-lg overflow-hidden">
        {data.type === 'image' ? (
          <img 
            src={data.url} 
            alt="Analyzed media" 
            className="w-full"
          />
        ) : (
          <video 
            controls 
            className="w-full"
            poster={data.thumbnail}
          >
            <source src={data.url} type={data.mimeType} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

function InputPreview({ type, data }) {
  const components = {
    chat: ChatPreview,
    email: EmailPreview,
    url: URLPreview,
    media: MediaPreview
  };

  const PreviewComponent = components[type.toLowerCase()];

  if (!PreviewComponent) {
    return (
      <div className="text-gray-500">
        Preview not available for this type of content
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Content Preview</h2>
      <PreviewComponent data={data} />
    </div>
  );
}

export default InputPreview;