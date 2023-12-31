export function getProductsListRequest() {
  // Fetch product list ...
  // await and parse response
  return fakeResponce
}

export function getProductRequest(id) {
  // Fetch product by id...
  // await and parse response
  return fakeResponce.find(item => item.id === id)
}

const fakeResponce = [
  {
    "id": "5b2760ac4613bc8ecb5693f6",
    "name": "Sapphire Necklace",
    "cover": "92a50329-cd3f-4fad-bc8f-04bca02e952e",
    "price": 300,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel volutpat ante. Nullam pellentesque ligula eu metus commodo, ac ultrices mauris dignissim."
  },
  {
    "id": "5b2760ace5b025b50a1f7d87",
    "name": "Silver Watch",
    "cover": "b259dd17-3bfa-4e62-9335-8e10944c12d2",
    "price": 850,
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce varius urna nec lectus eleifend, vel varius eros ultrices."
  },
  {
    "id": "5b2760ac74f355323578d65a",
    "name": "Golden Earrings",
    "cover": "52cf4552-f244-47f5-87d8-1e10e74e03e4",
    "price": 400,
    "description": "Donec eget lectus non odio blandit fermentum. Vivamus gravida libero et orci dignissim, vel interdum arcu finibus. Ut nec fermentum nisl, sed cursus velit."
  },
  {
    "id": "5b2760acfb01a505d3ac3139",
    "name": "Diamond Ring",
    "cover": "7fb36f8e-4842-4316-ba43-6fb8a79c54be",
    "price": 1015,
    "description": "Curabitur sit amet odio id nisl pellentesque porta. Proin gravida dolor sit amet metus feugiat, vel congue est bibendum. Etiam gravida ac odio id lacinia."
  },
  {
    "id": "5b2760acadaaef2ce88a7ada",
    "name": "Leather Bag",
    "cover": "16eb4503-7408-436d-87f9-7fc458aa98cc",
    "price": 700,
    "description": "Aliquam erat volutpat. Sed ac felis nec nunc rhoncus bibendum. In id purus vel elit eleifend malesuada. Sed vestibulum elit a nisi bibendum, vitae interdum turpis ultricies."
  },
  {
    "id": "5b2760acec7c62d65dd1f1cb",
    "name": "Silk Scarf",
    "cover": "e5134e24-2b59-43eb-8e8d-fb20508b7b01",
    "price": 700,
    "description": "Vestibulum facilisis nunc nec urna tincidunt, at finibus mauris hendrerit. Duis ullamcorper risus vel libero fermentum, nec ultricies lorem tristique. Nullam vitae enim vel elit dapibus rhoncus."
  },
  {
    "id": "5b2760ac89c7d290344e967e",
    "name": "Leather Shoes",
    "cover": "2c2a6588-7dc8-403b-b221-80ffc688bf0d",
    "price": 200,
    "description": "Nunc vehicula nunc vel est scelerisque, nec gravida libero tristique. Praesent nec est et tellus vehicula elementum. Quisque non nulla aliquet, ullamcorper neque id, tristique libero."
  },
  {
    "id": "5b2760ac1f5a45bb433bd7ee",
    "name": "Diamond Pendant",
    "cover": "a38d4311-823a-44e1-a840-2318fc7b9d83",
    "price": 850,
    "description": "Integer et venenatis dolor. Sed at ante vel arcu vulputate suscipit. Vestibulum eget fringilla metus. Nam suscipit felis sit amet lacinia auctor. Curabitur tempus enim id ullamcorper lobortis."
  },
  {
    "id": "5b2760ac087565373183b563",
    "name": "Silk Dress",
    "cover": "b080d7a6-a0d2-4e32-87d6-95454b259649",
    "price": 300,
    "description": "Ut euismod auctor tincidunt. Suspendisse potenti. Sed placerat, libero non tincidunt hendrerit, velit quam blandit enim, in posuere tellus neque eu turpis."
  },
  {
    "id": "5b2760aca074a48f5ac53250",
    "name": "Sapphire Bracelet",
    "cover": "0ffbdb30-9d8d-45b3-86c9-a09a06112845",
    "price": 200,
    "description": "Maecenas id odio vel est tincidunt congue. Sed ac eros vel tortor pellentesque imperdiet. Nullam malesuada ipsum id tincidunt varius. Nam tincidunt mauris quis libero cursus elementum."
  },
  {
    "id": "5b2760acbf3312546a8cbcb6",
    "name": "Silver Necklace",
    "cover": "f95d67c1-343b-42b8-a60e-ebf0142830c0",
    "price": 300,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel volutpat ante. Nullam pellentesque ligula eu metus commodo, ac ultrices mauris dignissim."
  },
  {
    "id": "5b2760acca8acd8f36ace4df",
    "name": "Silk Shirt",
    "cover": "20fe4174-1b13-4512-826f-0cdb6364f130",
    "price": 850,
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce varius urna nec lectus eleifend, vel varius eros ultrices."
  },
  {
    "id": "5b2760ac22aaa3814f4ac485",
    "name": "Emerald Necklace",
    "cover": "646c4f5d-717b-4115-a750-437d760003e2",
    "price": 500,
    "description": "Donec eget lectus non odio blandit fermentum. Vivamus gravida libero et orci dignissim, vel interdum arcu finibus. Ut nec fermentum nisl, sed cursus velit."
  },
  {
    "id": "5b2760acf5573d12495ad373",
    "name": "Sapphire Earrings",
    "cover": "b69970a1-a656-4536-882d-137e2f14b45a",
    "price": 1015,
    "description": "Curabitur sit amet odio id nisl pellentesque porta. Proin gravida dolor sit amet metus feugiat, vel congue est bibendum. Etiam gravida ac odio id lacinia."
  },
  {
    "id": "5b2760ace8c1f2d3297c4644",
    "name": "Green Shoes",
    "cover": "af5eab91-b203-477c-9ae3-112a5598ede1",
    "price": 300,
    "description": "Aliquam erat volutpat. Sed ac felis nec nunc rhoncus bibendum. In id purus vel elit eleifend malesuada. Sed vestibulum elit a nisi bibendum, vitae interdum turpis ultricies."
  },
  {
    "id": "5b2760ac523df196a7df5ba2",
    "name": "Blue Bag",
    "cover": "d36d1c56-aca5-414a-9df4-31ceafa17fa4",
    "price": 850,
    "description": "Vestibulum facilisis nunc nec urna tincidunt, at finibus mauris hendrerit. Duis ullamcorper risus vel libero fermentum, nec ultricies lorem tristique. Nullam vitae enim vel elit dapibus rhoncus."
  },
  {
    "id": "5b2760aceb1709a6bb1ba97e",
    "name": "Brown Scarf",
    "cover": "17bd8668-e3f8-4d73-ab70-02150e7b967b",
    "price": 400,
    "description": "Nunc vehicula nunc vel est scelerisque, nec gravida libero tristique. Praesent nec est et tellus vehicula elementum. Quisque non nulla aliquet, ullamcorper neque id, tristique libero."
  },
  {
    "id": "5b2760ac78b90a2b28957c29",
    "name": "Brown Hat",
    "cover": "84a05b4d-c4de-4b43-826f-fe48aa49757b",
    "price": 100,
    "description": "Integer et venenatis dolor. Sed at ante vel arcu vulputate suscipit. Vestibulum eget fringilla metus. Nam suscipit felis sit amet lacinia auctor. Curabitur tempus enim id ullamcorper lobortis."
  },
  {
    "id": "5b2760aca44baee3db29dcfa",
    "name": "Brown Watch",
    "cover": "8ce0f0cb-7d24-4ac3-9264-18d18d36e425",
    "price": 1015,
    "description": "Ut euismod auctor tincidunt. Suspendisse potenti. Sed placerat, libero non tincidunt hendrerit, velit quam blandit enim, in posuere tellus neque eu turpis."
  },
  {
    "id": "5b2760aca1de7a934bbc2d9a",
    "name": "Green Bracelet",
    "cover": "e6f4ae46-539d-4ef8-956c-1074b7ded5ae",
    "price": 300,
    "description": "Maecenas id odio vel est tincidunt congue. Sed ac eros vel tortor pellentesque imperdiet. Nullam malesuada ipsum id tincidunt varius. Nam tincidunt mauris quis libero cursus elementum."
  },
  {
    "id": "5b2760ac5e4f0b9cc0112eca",
    "name": "Green Shirt",
    "cover": "c7948b98-9f38-4118-9340-6d43f33ee75b",
    "price": 400,
    "description": "Vestibulum tristique neque vel arcu sagittis, id dictum elit congue. Maecenas aliquet, ante a ullamcorper pellentesque, dolor elit tempus metus, nec lacinia ex risus id quam."
  },
  {
    "id": "5b2760ac902d3bcd05545b96",
    "name": "Blue Shoes",
    "cover": "96262a01-e178-4d07-8089-e4ee2d5dd69b",
    "price": 300,
    "description": "Sed consequat, libero ut accumsan venenatis, lectus quam sodales nisi, ut commodo nisi tortor in nisl. Fusce pellentesque suscipit quam, vel mattis erat sollicitudin eu."
  },
  {
    "id": "5b2760ac08d28f73304f9184",
    "name": "Blue Watch",
    "cover": "a34a032e-266e-4c9b-b22c-f53a908eeb7f",
    "price": 1015,
    "description": "Donec et accumsan ex. Quisque in sapien ut neque viverra lacinia. Fusce viverra a elit non volutpat. Integer tincidunt tristique lacus, nec ultricies libero suscipit eu."
  },
  {
    "id": "5b2760ace776cae3b711af6d",
    "name": "Brown Watch",
    "cover": "52ed0627-03b5-4b03-86f2-3aa2fb509b8b",
    "price": 600,
    "description": "Cras dictum semper neque. Vestibulum bibendum sapien id libero feugiat, a ultrices metus bibendum. Nam lacinia mi in suscipit aliquam. Curabitur nec orci quis tellus dignissim congue."
  },
  {
    "id": "5b2760ac6a550c2f1b7ee75f",
    "name": "Green Shoes",
    "cover": "8066a450-958a-42e0-b7b8-ac97b79b459d",
    "price": 300,
    "description": "Nulla facilisi. Duis convallis sem non elit tincidunt, eu interdum felis egestas. In non ultrices tortor. Sed ac nisl efficitur, cursus erat sit amet, vestibulum arcu."
  },
  {
    "id": "5b2760ac2e7e3b878732d25f",
    "name": "Green Necklace",
    "cover": "28d78cec-46f8-451c-9c06-2b418208c15a",
    "price": 1015,
    "description": "Fusce eu dui eget augue rhoncus commodo. Curabitur pharetra nisl vel congue eleifend. Fusce scelerisque tristique magna, nec egestas libero cursus sed. Nullam ac metus ac purus cursus rhoncus."
  },
  {
    "id": "5b2760ac57787771da9c65b9",
    "name": "Green Earrings",
    "cover": "a4c36e4a-4b1a-46a9-a3b9-1554feb1979b",
    "price": 1015,
    "description": "Pellentesque eu libero volutpat, mattis quam id, commodo nunc. Sed euismod est vel metus auctor, at congue ligula laoreet. Etiam et vestibulum odio. Quisque et diam nec eros congue rhoncus."
  },
  {
    "id": "5b2760ac18deec37b9b368e0",
    "name": "Green Necklace",
    "cover": "bb1fe78b-5558-4b37-9e1f-5d79e9af2f2a",
    "price": 700,
    "description": "Phasellus varius leo et fringilla commodo. Fusce ut feugiat nunc. Vivamus bibendum elit nec massa tristique, eget malesuada elit interdum. Sed eget laoreet ligula, eu eleifend felis."
  },
  {
    "id": "5b2760aca41d26b1ae29cc7e",
    "name": "Blue Scarf",
    "cover": "f9344aba-ebf4-45bb-81ae-a39605a53d81",
    "price": 100,
    "description": "Cras eget dolor aliquet, commodo neque non, consequat turpis. Suspendisse potenti. Pellentesque dictum dui non urna dignissim fermentum. Duis quis ipsum eu massa viverra varius."
  },
  {
    "id": "5b2760acbaa026fafae77f09",
    "name": "Red Shirt",
    "cover": "4089e52f-b90b-4720-8d08-a655cafa7ab9",
    "price": 700,
    "description": "Fusce ac velit vestibulum, laoreet mi ut, ultricies ipsum. Nulla feugiat dolor in lectus convallis, ut faucibus odio fringilla. Vivamus eu pellentesque ex, nec vehicula ex."
  }
]